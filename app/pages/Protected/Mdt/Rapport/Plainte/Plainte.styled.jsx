import styled from "styled-components";
import {
  ActionButton,
  PageContainer,
} from "../../../../../components/PageContainer";

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
