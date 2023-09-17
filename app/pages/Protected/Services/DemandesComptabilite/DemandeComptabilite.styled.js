import styled from "styled-components";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../components/Forms/FormView.styled";

export const DemandeCompatibiliteContainer = styled.div`
  padding: 2.2rem 1.3rem 1.3rem;
`;

export const HeadertitlePage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: var(--font-title);
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 1);
`;

export const RowHeaderAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const PreviewBtn = styled.button`
  padding: 1.3rem;
  display: grid;
  place-items: center;
  border-radius: 5px;
`;

export const DemandeCompatibiliteBody = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DemandeCompatibiliteFormContainer = styled.div`
  width: 65%;
`;

export const FormFooter = styled.div`
  display: grid;
  place-items: center;
`;

export const PreviewDocumentContainer = styled(ModalFormContainer)`
  .agent,
  .objet,
  .date,
  .montant {
    margin-bottom: 1.8rem;
  }

  @media screen and (min-width: 992px) {
    width: 72rem;
    padding: 1.3rem;
  }
`;

export const PreviewDocumentBody = styled.div`
  @media screen {
    padding: 1.3rem;
  }
`;

export const PreviewDocumentHeader = styled.div`
  min-height: 10px;
`;

export const TextContent = styled.div`
  margin: 1.6rem auto;
  width: 100%;
  min-height: 110px;
  max-height: 245px;
  overflow-y: auto;
  overflow-x: hidden;
`;
