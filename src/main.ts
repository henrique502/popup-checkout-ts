import { Checkout } from "./types";
import Service from "./service";

declare global {
  interface Window {
    BavaCheckout: Checkout;
  }
}

window["BavaCheckout"] = new Service();
