export interface PopupParams {
  win: Window;
  url: string;
  title: string;
  w: number;
  h: number;
}

const popup = ({ win, url, title, w, h }: PopupParams): Window => {
  if (!win.top) {
    throw new Error("win.top is null")
  }

  const y = win.top.outerHeight / 2 + win.top.screenY - ( h / 2);
  const x = win.top.outerWidth / 2 + win.top.screenX - ( w / 2);
  const newWindow = win.open(url, title, `
    toolbar=no,
    location=no,
    directories=no,
    modal=yes,
    status=no,
    menubar=no,
    scrollbars=yes,
    resizable=yes,
    copyhistory=no,
    width=${w},
    height=${h},
    top=${y},
    left=${x}
   `);

  if (newWindow === null) {
    throw new Error("cannot open popup");
  }

  if (document.hasFocus()) {
    newWindow.focus();
  }

  return newWindow;
};

export default popup;
