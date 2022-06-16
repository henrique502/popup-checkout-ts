
export const createContainer = (): HTMLDivElement => {
  const element = document.createElement('div');

  element.style.display =  'block';
  element.style.position =  'fixed';
  element.style.top =  '0';
  element.style.left =  '0';
  element.style.width =  '100%';
  element.style.height =  '100%';
  element.style.width =  '100vw';
  element.style.height =  '100vh';
  element.style.maxWidth =  '100%';
  element.style.maxHeight =  '100%';
  element.style.minWidth =  '100%';
  element.style.minHeight =  '100%';
  element.style.zIndex =  '2147483647';
  element.style.animationDuration =  '0.3s';
  element.style.animationIterationCount =  '1';
  element.style.animationFillMode =  'forwards !important';
  element.style.animation =  'fadeIn 2s';
  element.style.opacity =  '1';
  element.style.transform =  'translate3d(0, 0, 0)';
  element.style.backgroundColor =  'black';
  element.style.backgroundColor =  'rgba(0, 0, 0, 0.8)';
  element.style.background =  'radial-gradient(50% 50%, ellipse closest-corner, rgba(0, 0, 0, 0.6) 1%, rgba(0, 0, 0, 0.8) 100%)';
  element.style.fontFamily =  '"HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif';
  element.style.fontSize =  '14px';
  element.style.color =  '#fff';

  return element;
}

export const createCloseButton = (): HTMLAnchorElement => {
  const element = document.createElement('a');

  element.style.position = "absolute";
  element.style.right = "16px";
  element.style.top = "16px";
  element.style.width = "16px";
  element.style.height = "16px";
  element.style.opacity = "0.6";
  element.textContent = "X";

  return element;
}

export const createModal = (): HTMLDivElement => {
  const element = document.createElement('div');

  element.style.textAlign = "center";
  element.style.boxSizing = "border-box";
  element.style.maxWidth = "350px";
  element.style.top = "50%";
  element.style.left = "50%";
  element.style.position = "absolute";
  element.style.transform = "translateX(-50%) translateY(-50%)";
  element.style.cursor = "pointer";

  return element;
}

export const createLogo = (): HTMLDivElement => {
  const element = document.createElement('div');

  element.style.marginBottom = "30px";
  element.style.display = "inline-block";

  return element;
}

export const createLogoTextArea = (): HTMLDivElement => {
  const element = document.createElement('div');

  element.style.height = "36px";
  element.style.display = "inline-block";

  const svg = `
    <svg width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFFFFF" d="M38.961 21.264c1.344.767 1.344 2.705 0 3.473L2.992 45.29C1.66 46.052 0 45.09 0 43.554V2.446C0 .911 1.659-.052 2.992.71l35.97 20.553Z" />
    </svg>
  `;

  element.insertAdjacentHTML('beforeend', svg);

  return element;
}

export const createMessage = (): HTMLDivElement => {
  const element = document.createElement('div');

  element.style.fontSize = "15px";
  element.style.lineHeight = "1.5";
  element.style.padding = "10px 0";

  return element;
}

export const createContinueButton = (): HTMLAnchorElement => {
  const element = document.createElement('a');

  element.style.fontSize = "15px";
  element.style.lineHeight = "1.35";
  element.style.padding = "10px 0";
  element.style.fontWeight = "bold";

  return element;
}
