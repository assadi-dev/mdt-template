import styled from "styled-components";

export const TableContainer = styled.table`
  font-size: 1.25rem;
  width: 100%;

  border-spacing: 0 10px;
  border-collapse: separate;
  width: 100%;
  margin: auto;
  & thead tr th,
  & thead tr td,
  & tbody tr th,
  & tbody tr td {
    vertical-align: middle;
    border: none;
  }

  & thead,
  & th,
  & td {
    padding: 0.72rem;
  }

  & tbody {
    border-spacing: 0 10px;
    border-collapse: separate;
    border-color: inherit;
  }

  & tbody tr {
    border-radius: 5px;
  }
  & tbody tr td {
    font-weight: 300;
  }

  tr {
    th,
    td {
      text-align: center;
    }
    th:first-of-type {
      text-align: left;
    }
    td:first-of-type {
      text-align: left;
    }
    td {
      max-width: 100px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:has(.Dropdown-root) {
        overflow-x: initial;
      }
      .dropdown-select-custom .Dropdown-control {
        padding: 0.65rem;
        font-size: 1.25rem;
      }

      input {
        padding: 0.5rem !important;
        width: fit-content !important;
        text-align: center;
      }
    }
  }
`;

export const TablePageContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-wrap: nowrap;
  gap: 1rem;
  margin: 1rem 0;
  button {
    flex: 0;
    display: grid;
    place-items: center;
    min-width: 25px;

    &:active {
      opacity: 0;
    }
    height: 25px;
    border-radius: 5px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
  [disabled],
  :disabled {
    opacity: 0.3 !important;
  }
`;
