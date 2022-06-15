import popup from "./helpers/popup";

// import {createBackdrop} from "./styles";


export interface OpenCheckoutOptions {
  target: string;
  onClose: () => void;
}

const BavaCheckoutOpen = ({ target }: OpenCheckoutOptions): void => {
  const body = document.querySelector("body");
  const url = new URL(target);
  // const overlay = createBackdrop({
  //   title: "Bava Checkout Overlay",
  //   id: "bava-overlay",
  //   name: "bava-overlay",
  // });

  if (!body) {
    console.error("body is null");
    return;
  }
  //
  // body.append(overlay);
  // overlay.style.opacity = "1";
  // console.log(url)
  //

  const win = popup({
    url: url.href,
    title: "aa",
    w: 400,
    h: 590,
  });


  console.log(win);
}

declare global {
  interface Window {
    BavaCheckoutOpen: (config: OpenCheckoutOptions) => void;
  }
}


window["BavaCheckoutOpen"] = BavaCheckoutOpen;
