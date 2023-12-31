import styled from "styled-components";

export const TabsContentContainer = styled.div`
  display: grid;
  @media screen and (min-width: 992px) {
    margin-top: 1rem;
    grid-template-columns: 0.38fr 1fr;
    grid-gap: 18px;
    padding-bottom: 22px;
  }
  .listGradeItem_selected {
    &::before {
      opacity: 1 !important;
      background-color: #fff;
    }
  }
`;

export const GradesColContainer = styled.div`
  padding-top: 2rem;

  width: 100%;
  min-height: 200px;
`;

export const GradeCategoryListContainer = styled.ul`
  margin-bottom: 2rem;
`;

export const GradesListeContainer = styled.ul`
  width: 100%;
  min-height: 50px;
  max-width: 80vh;
  overflow-x: hidden;
  overflow-y: auto;
  text-transform: uppercase;
`;

export const ListGradeCatItemsContainer = styled.div`
  .grade-category-name {
    margin-bottom: 2.3rem;
    font-weight: 600;
  }
  .listGradeItem {
    padding: 0.6rem 0 0.6rem 1rem;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.85);
    position: relative;
    cursor: pointer;
    font-size: 1.4rem;
    &::before {
      opacity: 0;
      content: "";
      position: absolute;
      left: 0;
      width: 2px;
      top: 50%;
      bottom: 0;
      border-radius: 50px;
      height: 80%;
      transform: translateY(-50%);
      transition: all 0.25s linear;
    }

    /*     &:hover {
      &::before {
        opacity: 1;
        background-color: #fff;
      }
    } */

    :active {
      opacity: 0.5;
    }
  }

  .grade-selected {
    &::before {
      content: "";
      opacity: 1;
      position: absolute;
      left: 0;
      width: 2px;
      top: 50%;
      bottom: 0;
      border-radius: 50px;
      height: 80%;
      transform: translateY(-50%);
      transition: all 0.25s linear;
      background-color: #fff;
      font-weight: bold !important;
    }
  }
`;

export const PageListColContainer = styled.div`
  padding: 1.6rem 1rem;
`;

export const TablePagesList = styled.table`
  width: 100%;
  border-spacing: 0px 1.2rem;
  border-collapse: separate;

  td:first-of-type {
    text-align: left;
  }
  thead,
  td {
    text-align: center;
  }
`;

export const HeaderPageSelect = styled.div`
  border-radius: 5px;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: space-evenly;
  grid-gap: 1rem;

  .header-page-btn {
    background-color: transparent;
    padding: 1rem 1.3rem;
    margin: 0 0.3rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.35s;
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem 1.3rem;
  border-radius: 5px;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  grid-gap: 1rem;
`;

export const RowStartEnd = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
