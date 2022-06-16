import popup from "./helpers/popup";
import {
  createOverlay,
} from "./helpers/overlay";

const ID = `bava-checkout-container-${new Date().toString()}`;

export interface OpenCheckoutOptions {
  target: string;
  onClose: () => void;
}

const BavaCheckoutOpen = ({ target, onClose }: OpenCheckoutOptions): void => {
  const body = document.querySelector("body");
  if (!body) {
    throw new Error("body is null");
  }

  const url = new URL(target);
  const callback = (element?: HTMLElement) => {
    if (element) {
      body.removeChild(element);
    }

    onClose();
  }

  const win = popup({
    url: url.href,
    title: "Bava Checkout",
    w: 400,
    h: 300,
  });

  const check = () => {
    if (!win.closed) {
      setTimeout(check, 1000)
      return;
    }

    callback();
  }

  const overlay = createOverlay({
    close: () => { callback(overlay); },
    focus: () => { win.focus(); },
  })

  body.append(overlay);

  check();
}

declare global {
  interface Window {
    BavaCheckoutOpen: (config: OpenCheckoutOptions) => void;
  }
}


window["BavaCheckoutOpen"] = BavaCheckoutOpen;
