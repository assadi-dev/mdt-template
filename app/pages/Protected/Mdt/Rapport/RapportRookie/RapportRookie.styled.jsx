import styled from "styled-components";
import {
  ActionButton,
  PageContainer,
} from "../../../../../components/PageContainer";
import { TextContent } from "../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";

export const RapportRookiePageContainer = styled(PageContainer)`
  .table {
    td:not(:first-of-type),
    th:not(:first-of-type) {
      text-align: center;
    }
  }
`;

export const CommentTextContent = styled(TextContent)`
  margin-top: 0;
`;

export const AddBtnRapportRookie = styled(ActionButton)`
  justify-self: end;
`;

export const AcuisitionSectionContainer = styled.div`
  margin-top: 2.5rem;
`;
