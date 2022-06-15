import popup from "./helpers/popup";
import {createBackdrop} from "./styles";

export interface OpenCheckoutOptions {
  target: string;
  onClose: () => void;
}

const BavaCheckoutOpen = ({ target, onClose }: OpenCheckoutOptions) => {
  const url = new URL(target);
  const overlay = createBackdrop({
    title: "Bava Checkout Overlay",
    id: "bava-overlay",
    name: "bava-overlay",
  });












}


export default BavaCheckoutOpen;
