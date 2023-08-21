import styled from "styled-components";
import { sidebarSize } from "../../config/stylesValues";
sidebarSize;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  //margin: 5% auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 50;

  @media screen and (min-width: 992px) {
    margin-left: ${sidebarSize - 80}px;
  }

  &::before {
    content: " ";
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

export const ModalContainer = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: transparent;
  min-height: 100px;
  width: fit-content;
  max-height: fit-content;
  top: 0;
  left: 50%;
`;

export const CloseBtnContainer = styled.span`
  width: fit-content;
  height: fit-content;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  user-select: none;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  transition: all 0.25s;
  svg {
    width: 45px;
    height: 45px;
  }
`;
