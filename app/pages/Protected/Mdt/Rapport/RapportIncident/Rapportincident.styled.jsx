import styled from "styled-components";
import {
  ActionButton,
  PageContainer,
} from "../../../../../components/PageContainer";

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
