import styled from "styled-components";
import {
  ActionButton,
  PageContainer,
} from "../../../../../components/PageContainer";
import { TextContent } from "../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";
import {
  ModalFooter,
  ModalFormContainer,
} from "../../../../../components/Forms/FormView.styled";

export const RapportRookiePageContainer = styled(PageContainer)`
  .table {
    td:not(:first-of-type),
    th:not(:first-of-type) {
      text-align: center;
    }
  }
`;

export const RapporRookieModalCOntainer = styled(ModalFormContainer)`
  .theme-text-editor {
    margin-top: 0 !important;
  }

  @media screen and (min-width: 992px) {
    width: 72rem;
  }
`;

export const CommentTextContent = styled(TextContent)`
  margin-top: 0;
  min-height: auto;
  font-size: 1.3rem;
`;

export const AddBtnRapportRookie = styled(ActionButton)`
  justify-self: end;
`;

export const AcuisitionSectionContainer = styled.fieldset`
  margin-top: 1.5rem;
  border-radius: 8px;
`;

export const ReportRookieModalFooter = styled(ModalFooter)`
  margin: 0;
`;
