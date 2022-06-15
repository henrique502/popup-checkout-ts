
export type BackdropConfig = {
  id: string,
  name: string,
  title: string,
}

export const createBackdrop = (config: BackdropConfig): HTMLIFrameElement => {
  const el = document.createElement('iframe');

  el.style.display = "block";
  el.style.position = "fixed";
  el.style.top = "0";
  el.style.left = "0";
  el.style.width = "100%";
  el.style.height = "100%";
  el.style.width = "100vw";
  el.style.height = "100vh";
  el.style.maxWidth = "100%";
  el.style.maxHeight = "100%";
  el.style.minWidth = "100%";
  el.style.minHeight = "100%";
  el.style.zIndex = "2147483647";
  el.style.animationDuration = "0.3s";
  el.style.animationIterationCount = "1";
  el.style.animationFillMode = "forwards !important";
  el.style.opacity = "0";

  el.setAttribute("scrolling", "no");
  el.setAttribute("id", config.id);
  el.setAttribute("name", config.name);
  el.setAttribute("title", config.title);

  return el;
}
