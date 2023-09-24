import styled from "styled-components";
import DataTable from "../../../../components/DataTable";

export const PanicButtonDataTable = styled(DataTable)`
  th:not(:first-of-type) {
    text-align: center;
  }
  td:not(:first-of-type) {
    text-align: center;
  }
`;
