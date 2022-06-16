import styled from 'styled-components';
import LogoText from "../LogoText";
import LogoIcon from "../LogoIcon";

export const Container = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  min-width: 100%;
  min-height: 100%;
  z-index: 2147483647;
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards !important;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  background-color: black;
  background-color: rgba(0, 0, 0, 0.8);
  background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0, 0, 0, 0.6) 1%, rgba(0, 0, 0, 0.8) 100%);
  font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;
  font-size: 14px;
  color: #fff;
`;

export const CloseButton = styled.a`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 16px;
  height: 16px;
  opacity: 0.6;
`;

export const Modal = styled.div`
  text-align: center;
  box-sizing: border-box;
  max-width: 350px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  cursor: pointer;
`;

export const Logo = styled.div`
  margin-bottom: 30px;
  display: inline-block;
`;

export const LogoIconArea = styled(LogoIcon)`
  height: 36px;
  margin-right: 10px;
`;

export const LogoTextArea = styled(LogoText)`
  height: 36px;
`;

export const Message = styled.div`
  font-size: 15px;
  line-height: 1.5;
  padding: 10px 0;
`;

export const ContinueButton = styled.a`
  font-size: 15px;
  line-height: 1.35;
  padding: 10px 0;
  font-weight: bold;
`;

