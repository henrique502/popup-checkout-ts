var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var Environment = /* @__PURE__ */ ((Environment2) => {
  Environment2["Development"] = "development";
  Environment2["Staging"] = "staging";
  Environment2["Production"] = "production";
  return Environment2;
})(Environment || {});
var Endpoint = /* @__PURE__ */ ((Endpoint2) => {
  Endpoint2["Development"] = "https://pay.dev.bavabank.com";
  Endpoint2["Staging"] = "https://pay.stg.bavabank.com";
  Endpoint2["Production"] = "https://pay.bavabank.com";
  return Endpoint2;
})(Endpoint || {});
const popup = ({ url, title, w, h }) => {
  const dualScreenLeft = window.screenLeft !== void 0 ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== void 0 ? window.screenTop : window.screenY;
  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;
  const newWindow = window.open(url, title, `
      scrollbars=yes,
      width=${w / systemZoom},
      height=${h / systemZoom},
      top=${top},
      left=${left}
     `);
  if (newWindow === null) {
    throw new Error("cannot open popup");
  }
  if (document.hasFocus()) {
    newWindow.focus();
  }
  return newWindow;
};
const createContainer = () => {
  const element = document.createElement("div");
  element.style.display = "block";
  element.style.position = "fixed";
  element.style.top = "0";
  element.style.left = "0";
  element.style.width = "100%";
  element.style.height = "100%";
  element.style.width = "100vw";
  element.style.height = "100vh";
  element.style.maxWidth = "100%";
  element.style.maxHeight = "100%";
  element.style.minWidth = "100%";
  element.style.minHeight = "100%";
  element.style.zIndex = "2147483647";
  element.style.animationDuration = "0.3s";
  element.style.animationIterationCount = "1";
  element.style.animationFillMode = "forwards !important";
  element.style.animation = "fadeIn 2s";
  element.style.opacity = "1";
  element.style.transform = "translate3d(0, 0, 0)";
  element.style.backgroundColor = "black";
  element.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  element.style.background = "radial-gradient(50% 50%, ellipse closest-corner, rgba(0, 0, 0, 0.6) 1%, rgba(0, 0, 0, 0.8) 100%)";
  element.style.fontFamily = '"HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif';
  element.style.fontSize = "14px";
  element.style.color = "#fff";
  return element;
};
const createCloseButton = () => {
  const element = document.createElement("a");
  element.style.position = "absolute";
  element.style.right = "16px";
  element.style.top = "16px";
  element.style.width = "16px";
  element.style.height = "16px";
  element.style.opacity = "0.6";
  element.textContent = "X";
  return element;
};
const createModal = () => {
  const element = document.createElement("div");
  element.style.textAlign = "center";
  element.style.boxSizing = "border-box";
  element.style.maxWidth = "350px";
  element.style.top = "50%";
  element.style.left = "50%";
  element.style.position = "absolute";
  element.style.transform = "translateX(-50%) translateY(-50%)";
  element.style.cursor = "pointer";
  return element;
};
const createLogo = () => {
  const element = document.createElement("div");
  element.style.marginBottom = "30px";
  element.style.display = "inline-block";
  return element;
};
const createLogoTextArea = () => {
  const element = document.createElement("div");
  element.style.height = "36px";
  element.style.display = "inline-block";
  const svg = `
    <svg width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFFFFF" d="M38.961 21.264c1.344.767 1.344 2.705 0 3.473L2.992 45.29C1.66 46.052 0 45.09 0 43.554V2.446C0 .911 1.659-.052 2.992.71l35.97 20.553Z" />
    </svg>
  `;
  element.insertAdjacentHTML("beforeend", svg);
  return element;
};
const createMessage = () => {
  const element = document.createElement("div");
  element.style.fontSize = "15px";
  element.style.lineHeight = "1.5";
  element.style.padding = "10px 0";
  return element;
};
const createContinueButton = () => {
  const element = document.createElement("a");
  element.style.fontSize = "15px";
  element.style.lineHeight = "1.35";
  element.style.padding = "10px 0";
  element.style.fontWeight = "bold";
  return element;
};
const createOverlay = ({ focus, close }) => {
  const container = createContainer();
  const closeButton = createCloseButton();
  const modal = createModal();
  const logo = createLogo();
  const logoTextArea = createLogoTextArea();
  const message = createMessage();
  const continueButton = createContinueButton();
  closeButton.onclick = (event) => {
    event.preventDefault();
    close();
  };
  continueButton.textContent = "Clique para continuar";
  continueButton.onclick = (event) => {
    event.preventDefault();
    focus();
  };
  message.textContent = "N\xE3o v\xEA o navegador seguro do Bava? Ajudaremos voc\xEA a relan\xE7ar a janela para que finalize sua compra";
  container.append(closeButton);
  container.append(modal);
  modal.append(logo);
  modal.append(message);
  modal.append(continueButton);
  logo.append(logoTextArea);
  return container;
};
class Service {
  constructor() {
    __publicField(this, "_id");
    __publicField(this, "_body");
    __publicField(this, "_overlay");
    __publicField(this, "_popup");
    __publicField(this, "_checkInterval");
    __publicField(this, "_endpoint");
    __publicField(this, "_onClose");
    const body = document.querySelector("body");
    if (!body) {
      throw new Error("tag body not found");
    }
    this._id = `bava-checkout-container-${new Date().toString()}`;
    this._popup = void 0;
    this._overlay = void 0;
    this._body = body;
    this._endpoint = Endpoint.Production;
    this._onClose = () => {
    };
  }
  setEnvironment(environment) {
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
      default:
        throw new Error("invalid environment");
    }
  }
  checkout(invoice) {
    if (this._popup) {
      this._popup.location = `${this._endpoint}/payment-link/#/${invoice}`;
    }
  }
  close() {
    this._callback();
  }
  isOpen() {
    if (!this._popup) {
      return false;
    }
    return !this._popup.closed;
  }
  open(config) {
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
      h: 300
    });
    this._overlay = createOverlay({
      close: () => {
        this._callback();
      },
      focus: () => {
        this._focus();
      }
    });
    this._body.append(this._overlay);
    this._check();
  }
  _callback() {
    if (this._overlay) {
      this._overlay.remove();
      this._overlay = void 0;
    }
    if (this._checkInterval) {
      clearTimeout(this._checkInterval);
      this._checkInterval = void 0;
    }
    if (this._popup) {
      this._popup.close();
      this._popup = void 0;
    }
    if (this._onClose) {
      this._onClose();
    }
  }
  _check() {
    if (this.isOpen()) {
      this._checkInterval = setTimeout(() => {
        this._check();
      }, 700);
      return;
    }
    this._callback();
  }
  _focus() {
    if (this._popup) {
      this._popup.focus();
    }
  }
}
window["BavaCheckout"] = new Service();
