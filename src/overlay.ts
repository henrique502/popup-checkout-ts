import {
  createCloseButton,
  createContainer, createContinueButton,
  createLogo,
  createLogoTextArea,
  createMessage,
  createModal
} from "./styles";


export interface OverlayProps {
  focus: () => void;
  close: () => void;
}

export const createOverlay = ({ focus, close }: OverlayProps) => {
  const container = createContainer();
  const closeButton = createCloseButton();
  const modal = createModal();
  const logo = createLogo();
  const logoTextArea = createLogoTextArea();
  const message = createMessage();
  const continueButton = createContinueButton()

  closeButton.onclick = (event) => {
    event.preventDefault();
    close();
  };

  continueButton.textContent = "Clique para continuar";
  continueButton.onclick = (event) => {
    event.preventDefault();
    focus();
  };

  message.textContent = "Não vê o navegador seguro do Bava? Ajudaremos você a relançar a janela para que finalize sua compra";


  container.append(closeButton);
  container.append(modal)
  modal.append(logo);
  modal.append(message)
  modal.append(continueButton)
  logo.append(logoTextArea)

  return container;
}
