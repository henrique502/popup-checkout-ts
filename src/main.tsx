import React from 'react'
import ReactDOM from 'react-dom/client'

import popup from "./helpers/popup";
import Backdrop from "./components/Backdrop";

const ID = `bava-checkout-container-${new Date().toString()}`;

const getRoot = (): ReactDOM.Root  => {
  const body = document.querySelector("body");
  if (!body) {
    throw new Error("body is null");
  }

  const container = document.createElement("div");
  container.id = ID;
  body.appendChild(container);

  return ReactDOM.createRoot(container);
}


export interface OpenCheckoutOptions {
  target: string;
  onClose: () => void;
}

const BavaCheckoutOpen = ({ target, onClose }: OpenCheckoutOptions): void => {
  const root = getRoot();
  const url = new URL(target);
  const callback = () => {
    root.unmount();
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

  root.render(
    <React.StrictMode>
      <Backdrop
        close={callback}
        focus={() => { win.focus() }}
      />
    </React.StrictMode>
  );

  check();
}

declare global {
  interface Window {
    BavaCheckoutOpen: (config: OpenCheckoutOptions) => void;
  }
}


window["BavaCheckoutOpen"] = BavaCheckoutOpen;
