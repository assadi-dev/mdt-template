import styled from "styled-components";
import SearchInputUser from "../../../components/Forms/SearchBarUser";
import { Row } from "../../../components/PageContainer";

export const HeaderRow = styled(Row)`
  min-height: 55px;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2.3rem;
  justify-content: space-between;
  width: 100%;
`;

export const EndOfWatchSearchInput = styled(SearchInputUser)`
  width: 100%;
  @media screen and (min-width: 992px) {
    width: 42rem;
  }
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

//Grid section
export const EndOfWatchGridCards = styled.div`
  padding-top: 2.2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  justify-content: center;
  grid-gap: 1rem;
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, 300px);
  }
`;

//Card
export const EndOfWatchCardsContainer = styled.figure`
  justify-self: center;
  padding-top: 1rem;
  @media screen and (min-width: 992px) {
    width: 100%;
  }
`;

export const EndOfWatchCardsPicture = styled.div`
  border-radius: 10px;
  border: 2px solid #131b26;
  width: 240px;
  height: 280px;
  margin: 0 auto 1rem auto;
  position: relative;
  box-shadow: 0px 4px 30px 0px #131b26;

  img {
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 1/1;
    transition: filter 0.35s ease-in;

    filter: grayscale(1);

    &:hover {
      filter: grayscale(0);
    }
  }
`;

export const EndOfWatchDetail = styled.legend`
  min-height: 50px;
  padding: 1.5rem 1.3rem;
  text-align: center;
  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    @media screen and (min-width: 992px) {
      font-size: 1.18rem;
    }
  }
`;

//Emblem Card

export const LogoFaction = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  transform: translate(-25%, 25%);
  border-radius: 100%;
  width: 50px;
  height: 50px;
  background-position: center;
  background-size: contain;
  background-color: transparent;
  @media screen and (min-width: 992px) {
    width: 80px;
    height: 80px;
  }
`;
