import styled from "styled-components";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../components/Forms/FormView.styled";
import { Link } from "react-router-dom";
import { ActionButton } from "../../../../components/PageContainer";

export const DemandeCompatibiliteContainer = styled.div`
  .table_omptablility {
    th:not(:first-of-type),
    td:not(:first-of-type) {
      text-align: center !important;
    }
  }

  .pending {
    background-color: var(--orange);
    color: #111;
  }
  .rejected {
    background-color: var(--red);
    color: #fff;
  }
  .accepted {
    color: #fff;
    background-color: var(--green);
  }
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
  min-height: 490px;
  @media screen {
    min-height: 610px;
    padding: 1.3rem;
  }
`;

export const PreviewDocumentHeader = styled.div`
  min-height: 10px;
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

export const AddDemandeBtn = styled(ActionButton)`
  justify-self: end;
`;

export const StateIcon = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  display: grid;
  place-items: center;
  margin: 0 auto;
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const PreviewRow = styled.div`
  margin: 1.2rem 0;
  display: flex;
  justify-content: flex-end;
`;
