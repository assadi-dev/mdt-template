import styled from "styled-components";

export const GradePageContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  padding-left: 18px;
  padding-top: 18px;
  .grades-table {
    td:not(:first-of-type),
    th:not(:first-of-type) {
      text-align: center;
    }
  }
`;

export const GradPageHeaderRow = styled.div`
  display: flex;
  align-items: center;
  min-height: 25px;
  width: 100%;
  justify-content: flex-end;
  padding: 0 1.4rem;
  margin-bottom: 1.3rem;
`;

export const RowNavBtn = styled.div`
  display: flex;
  grid-gap: 1.2rem;
  margin-bottom: 1.3rem;
  background-color: rgba(0, 0, 0, 0.6);
  .nav-tabs-button {
    padding: 1rem 1.3rem;
    margin: 0.3rem;
    border-radius: 5px;
  }
`;

export const RowActionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  min-height: 25px;
  align-items: center;
  margin-bottom: 1.4rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
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

export const AddButton = styled.button`
  padding: 1rem 1.3rem;
  border-radius: 5px;
  justify-self: end;
  align-self: center;
`;
