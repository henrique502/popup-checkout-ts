import {
  Container,
  CloseButton,
  Modal,
  Logo,
  LogoIconArea,
  LogoTextArea,
  Message,
  ContinueButton,
} from "./styles";

export interface BackdropProps {
  focus: () => void;
  close: () => void;
}

const Backdrop = ({ close, focus }: BackdropProps) => (
  <Container>
    <CloseButton aria-label="close" role="button" onClick={() => { close() }}>
      X
    </CloseButton>
    <Modal>
      <Logo>
        <LogoIconArea />
        <LogoTextArea />
      </Logo>
      <Message >
        Não vê o navegador seguro do Bava? Ajudaremos você a relançar a janela para que finalize sua compra
      </Message>
      <ContinueButton onClick={() => { focus() }}>
        Clique para continuar
      </ContinueButton>
    </Modal>
  </Container>
);

export default Backdrop;
