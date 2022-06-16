import React from 'react'
import ReactDOM from 'react-dom/client'

import popup from "./helpers/popup";
import Backdrop from "./components/Backdrop";

// import {createBackdrop} from "./styles";


const ID = `bava-checkout-container-${new Date().toString()}`;
let root: ReactDOM.Root;

const getRoot = (): ReactDOM.Root  => {
  if (root) {
    return root;
  }

  const body = document.querySelector("body");
  if (!body) {
    throw new Error("body is null");
  }

  let container = document.getElementById(ID);
  if (!container) {
    container = document.createElement("div");
    container.id = ID;
    body.appendChild(container);
  }

  root = ReactDOM.createRoot(container);
  return root;
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
    title: "aa",
    w: 400,
    h: 90,
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
