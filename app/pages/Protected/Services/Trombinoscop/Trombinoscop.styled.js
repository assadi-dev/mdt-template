import styled from "styled-components";
import { Row } from "../../../../components/PageContainer";
import SearchInputUser from "../../../../components/Forms/SearchBarUser";

export const HeaderRow = styled(Row)`
  min-height: 55px;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2.3rem;
  justify-content: space-between;
  width: 100%;
`;

export const TrombinoscopeSearchInput = styled(SearchInputUser)`
  width: 100%;
  @media screen and (min-width: 992px) {
    width: 42rem;
  }
`;

export const TrombinoscopGridCards = styled.div`
  padding-top: 2.2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  justify-content: center;
  grid-gap: 1rem;
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, 350px);
  }
`;

export const AgentCardContainer = styled.div`
  width: 95%;
  justify-self: center;
  box-shadow: 3px 3px 8px 1px rgba(0, 0, 0, 0.15);
  min-height: 100px;
  border-radius: 5px;
  padding: 1rem;
  height: 355px;
`;

export const AgentCardBody = styled.div`
  width: 100%;
  text-align: center;
  overflow-x: hidden;

  p {
    line-height: 2.2rem;
    margin-bottom: 1.3rem;
    max-width: 95%;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: auto;
    margin-right: auto;
  }
  .agent {
    font-weight: bolder;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: var(--font-title);
  }
`;

export const PhotoContainer = styled.div`
  margin: 1.8rem auto 1.8rem auto;
  width: fit-content;

  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    border-radius: 100%;
    cursor: pointer;
  }
`;

export const NoFounMessage = styled.p`
  white-space: nowrap;
`;

//Pagination Section

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
