import popup from "./popup";
import {
  createOverlay,
} from "./overlay";

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

  let overlay: HTMLElement;
  const url = new URL(target);
  const callback = () => {
    if (overlay) {
      overlay.remove();
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

  overlay = createOverlay({
    close: () => { callback(); },
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
