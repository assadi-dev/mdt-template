import styled from "styled-components";
import { ModalContainer } from "../../Forms/FormView.styled";

export const PreviewDocumentContainer = styled(ModalContainer)`
  padding: 1rem;
  width: 100%;

  @media screen and (min-width: 992px) {
    width: 72rem;
    padding: 1.3rem;
  }
`;

export const PreviewDocumentBody = styled.div`
  padding: 1rem;
  width: 100%;

  @media screen and (min-width: 992px) {
    padding: 1.3rem;
    min-height: 440px;
    margin: 1.3rem auto;
  }
`;

export const PreviewDocumentHeader = styled.div`
  min-height: 10px;
  margin: 1.3rem auto;
  p {
    margin-bottom: 1rem;
  }
`;

export const TextContent = styled.div`
  padding-top: 2rem;
  margin-top: 3.5rem;
  width: 100%;
  min-height: 220px;
  max-height: 345px;
  overflow-y: auto;
  overflow-x: hidden;
  @media screen and (min-width: 992px) {
    min-height: 280px;
    max-height: 545px;
  }
`;
