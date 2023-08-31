import styled from "styled-components";

export const MainContainer = styled.main`
  width: 90%;
  margin: 14px auto;
  .users-table {
    th,
    td {
      text-align: center;
    }
    .dropdown-select-custom {
      margin: 0 auto;
    }

    th:first-of-type,
    td:first-of-type {
      text-align: left;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
