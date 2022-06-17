export enum Environment {
  Development = "development",
  Staging = "staging",
  Production = "production",
}

export enum Endpoint {
  Development = "https://pay.dev.bavabank.com",
  Staging = "https://pay.stg.bavabank.com",
  Production = "https://pay.bavabank.com",
}

export interface CheckoutConfig {
  onClose: () => void;
}

export interface CheckoutRedirectConfig {
  returnTo?: string
}

export interface OverlayProps {
  focus: () => void;
  close: () => void;
}

export interface Checkout {
  open: (config: CheckoutConfig) => void;
  checkout: (invoice: string) => void;
  redirect: (invoice: string, config?: CheckoutRedirectConfig) => void;
  close: () => void;
  isOpen: () => boolean;
  setEnvironment: (development: Environment) => void;
}


