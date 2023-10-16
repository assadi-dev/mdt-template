import styled from "styled-components";
import {
  ActionButton,
  PageContainer,
} from "../../../../../components/PageContainer";
import { TextContent } from "../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";
import { ModalFormContainer } from "../../../../../components/Forms/FormView.styled";

export const RapportRookiePageContainer = styled(PageContainer)`
  .table {
    td:not(:first-of-type),
    th:not(:first-of-type) {
      text-align: center;
    }
  }
`;

export const RapporRookieModalCOntainer = styled(ModalFormContainer)`
  @media screen and (min-width: 992px) {
    width: 72rem;
  }
`;

export const CommentTextContent = styled(TextContent)`
  margin-top: 0;
`;

export const AddBtnRapportRookie = styled(ActionButton)`
  justify-self: end;
`;

export const AcuisitionSectionContainer = styled.fieldset`
  margin-top: 1.5rem;
  border-radius: 8px;
`;
