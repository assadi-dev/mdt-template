import styled from "styled-components";
import {
  ActionButton,
  PageContainer,
} from "../../../../../components/PageContainer";
import { TextContent } from "../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";

export const PlaintPageContainer = styled(PageContainer)`
  .table {
    th,
    td {
      text-align: center;
    }
  }
`;

export const AddBtn = styled(ActionButton)`
  justify-self: end;
`;

export const RowPreuveButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
  width: 100%;
`;

export const DepotTextContent = styled(TextContent)`
  .depot-title {
    margin: 1rem 0;
    font-weight: bolder;
  }
`;
