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

export const RapportIncidentPageContainer = styled(PageContainer)`
  .table {
    td:not(:first-of-type),
    th:not(:first-of-type) {
      text-align: center;
    }
  }
`;

export const AddBtnRapportIncident = styled(ActionButton)`
  justify-self: end;
`;

export const ModalRapportIncident = styled(ModalContainer)`
  @media screen and (min-width: 992px) {
    width: 72rem;
  }
`;

export const FormRapportIncidentContainer = styled(FormContainer)``;

export const RapportTextEditor = styled(MarkdowTextEditor)`
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
`;
