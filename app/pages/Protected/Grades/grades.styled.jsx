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

  .nav-tabs-button {
    padding: 1rem 1.3rem;
    margin: 0.3rem;
    border-radius: 5px;
  }
`;

export const RowAction = styled.div`
  margin-bottom: 1.3rem;
`;
