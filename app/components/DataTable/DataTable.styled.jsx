import styled from "styled-components";

export const Table = styled.table`
  border-spacing: 0 15px;
  border-collapse: separate;
  width: 100%;
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

  td {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
`;

export const ActionButton = styled.button`
  width: 28px;
  height: 25px;
  color: #fff;
  border-radius: 3px;
  display: grid;
  place-items: center;
  transition: all 0.25s;
  svg {
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 1));
    stroke-width: 0.35px;
    width: 15px;
    height: 15px;
  }
`;

export const PaginationContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  grid-gap: 1rem;
  justify-content: flex-end;
  align-items: center;

  & .paginate-btn {
    padding: 0.5rem;
    text-align: center;
    width: fit-content;
    height: fit-content;
    display: grid;
    place-items: center;
    border-radius: 5px;
    cursor: pointer;
    & :hover {
      opacity: 0.5;
    }

    :disabled {
      opacity: 0.5;
    }
    & :active {
      opacity: 1;
      transform: scale(0.9);
    }
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const PageIndexInput = styled.input`
  width: 30px;
  height: 25px;
  padding: 0rem;
  text-align: center;
  //border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.3rem;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const HeaderTableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 25px;
  align-items: center;
  margin-bottom: 1.4rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  & .start {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  & .end {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const SearchSection = styled.div`
  position: relative;
  width: 100%;
  input {
    padding: 1rem 1.2rem 1rem 35px;
    width: 100%;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(255, 252, 255, 0.3);
    height: 100%;
    transition: all 0.35s;
  }
  @media screen and (min-width: 992px) {
    width: 50%;
  }
`;

export const IconInput = styled.span`
  display: block;
  left: 8px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  color: rgba(255, 252, 255, 0.3);
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const SpinnerLoaderContent = styled.div`
  padding: 1rem;
`;
export const LoadingLabelMessage = styled.div`
  margin-bottom: 0.5rem;
`;
