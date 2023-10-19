import styled from "styled-components";
import {
  ActionButton,
  PageContainer,
} from "../../../../../components/PageContainer";
import {
  FormContainer,
  ModalContainer,
} from "../../../../../components/Forms/FormView.styled";
import MarkdowTextEditor from "../../../../../components/TextEditor/MarkdowTextEditor";

export const RapportInterventionPageContainer = styled(PageContainer)`
  .table {
    th:not(:first-of-type),
    td:not(:first-of-type) {
      text-align: center;
    }
  }
`;

export const AddBtnRapporIntervention = styled(ActionButton)`
  justify-self: end;
`;

export const ModalRapportIntervention = styled(ModalContainer)`
  @media screen and (min-width: 992px) {
    width: 72rem;
  }
`;

export const FormRapportInterventionContainer = styled(FormContainer)``;

export const RapportTextEditor = styled(MarkdowTextEditor)`
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
`;
