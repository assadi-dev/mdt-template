import styled from "styled-components";

export const Table = styled.table`
  border-spacing: 0 15px;
  border-collapse: separate;
  width: 90%;
  margin: auto;
  & thead tr th,
  & thead tr td,
  & tbody tr th,
  & tbody tr td {
    vertical-align: middle;
    border: none;
    text-align: left;
  }

  & thead tr th:last-of-type {
    text-align: center;
  }
  & tbody tr td:last-of-type {
    text-align: center;
  }

  & thead,
  & th,
  & td {
    padding: 0.8rem;
  }
  & th {
  }

  & tbody {
    border-spacing: 0 15px;
    border-collapse: separate;
    border-color: inherit;
  }

  & tbody tr {
    border-radius: 5px;
  }
  & tbody tr td {
    font-weight: 300;
  }

  & tbody tr td:first-child {
    border-radius: 5px 0 0 5px;
  }
  & tbody tr td:last-child {
    border-radius: 0 5px 5px 0;
  }

  .td-center {
    text-align: center;
  }
`;

export const EmptyRowStyle = styled.td`
  text-align: center;
`;

export const TableAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  .edit {
    background: var(--teal);
  }
  .delete {
    background: var(--danger-color);
  }
`;

export const ActionButton = styled.button`
  width: 30px;
  height: 30px;
  color: #fff;
  text-shadow: 0px 0px rgba(0, 0, 0, 1);
  background-color: transparent;
  border-radius: 3px;
`;
