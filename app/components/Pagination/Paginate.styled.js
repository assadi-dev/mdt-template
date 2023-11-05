import styled from "styled-components";

//Pagination Original
export const PaginationSectionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 0.5rem;
`;

export const ButtonPagination = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  border-radius: 5px;
  margin: 0 0.2rem;

  svg {
    width: 18px;
    height: 18px;
  }
  &:active {
    opacity: 0;
  }
  &:disabled {
    opacity: 0.5 !important;
  }
`;

export const PangIndicator = styled.div`
  margin: 0 1rem;
  padding: 1rem;
`;
