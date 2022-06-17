import {
  Checkout,
  CheckoutConfig,
  Endpoint,
  Environment,
} from "./types";
import popup from "./popup";
import { createOverlay } from "./overlay";

class Service implements Checkout {
  private _id: string;
  private _body: HTMLBodyElement;
  private _overlay?: HTMLElement
  private _popup?: Window;
  private _checkInterval?: NodeJS.Timeout;
  private _endpoint: Endpoint;
  private _onClose: () => void;

  constructor() {
    const body = document.querySelector("body");
    if (!body) {
      throw new Error("tag body not found");
    }

    this._id = `bava-checkout-container-${new Date().toString()}`;
    this._popup = undefined;
    this._overlay = undefined;
    this._body = body;
    this._endpoint = Endpoint.Production;
    this._onClose = () => {};
  }

  setEnvironment(environment: Environment) {
    switch (environment) {
      case Environment.Development:
        this._endpoint = Endpoint.Development;
        break;
      case Environment.Staging:
        this._endpoint = Endpoint.Staging;
        break;
      case Environment.Production:
        this._endpoint = Endpoint.Production;
        break;
      default: throw new Error("invalid environment");
    }
  }

  checkout(invoice: string): void {
    if (this._popup) {
      this._popup.location = `${this._endpoint}/payment-link/#/${invoice}`;
    }
  }

  close(): void {
    this._callback();
  }

  isOpen(): boolean {
    if (!this._popup) {
      return false;
    }

    return !this._popup.closed;
  }

  open(config: CheckoutConfig): void {
    if (this.isOpen()) {
      throw new Error("checkout is already opened");
    }

    if (!config.onClose) {
      throw new Error("onClose function must be defined");
    }

    this._onClose = config.onClose;
    this._popup = popup({
      url: `${this._endpoint}/init.html`,
      title: "Bava Checkout",
      w: 400,
      h: 300,
    });

    this._overlay = createOverlay({
      close: () => { this._callback() },
      focus: () => { this._focus(); },
    })

    this._body.append(this._overlay);
    this._check();
  }

  private _callback() {
    if (this._overlay) {
      this._overlay.remove();
      this._overlay = undefined;
    }

    if (this._checkInterval) {
      clearTimeout(this._checkInterval);
      this._checkInterval = undefined;
    }

    if (this._popup) {
      this._popup.close();
      this._popup = undefined;
    }

    if (this._onClose) {
      this._onClose();
    }
  }

  private _check() {
    if (this.isOpen()) {
      this._checkInterval = setTimeout(() => { this._check(); }, 700);
      return;
    }

    this._callback();
  }

  private _focus() {
    if (this._popup) {
      this._popup.focus();
    }
  }
}

export default Service;
