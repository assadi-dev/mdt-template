import styled from "styled-components";
import {
  ActionButton,
  PageContainer,
} from "../../../../../components/PageContainer";

export const RapportInterventionPageContainer = styled(PageContainer)`
  .table {
    th:not(:first-of-type),
    td:not(:first-of-type) {
      text-align: center;
    }
  }
`;

export const AddBtnRapporIncident = styled(ActionButton)`
  justify-self: end;
`;
