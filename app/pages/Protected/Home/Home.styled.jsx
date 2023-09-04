import styled from "styled-components";

export const HomePageContainer = styled.div`
  padding: 1.3rem;
  max-width: 90%;
  margin: 0 auto;
`;

export const RowHeaderCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 380px);
  grid-gap: 2rem;
  justify-content: space-between;
`;

export const MainContent = styled.div`
  margin: 1.3rem 0;
  padding-top: 55px;
`;

export const InfoCardContainer = styled.div`
  padding: 1.8rem;
  border-radius: 8px;
  height: 145px;
  width: 100%;
  position: relative;
  display: grid;
`;

export const InfoCardIcon = styled.span`
  width: 55px;
  height: 55px;
  position: absolute;
  right: 15px;
  top: 15px;

  border-radius: 100%;
  display: grid;
  place-items: center;
  svg {
    width: 30px;
    height: 30px;
    margin: 0;
  }
`;

export const InfoCardTitle = styled.p`
  margin: 15px 0;
  font-family: var(--font-title);
`;

export const InfoCardContent = styled.div`
  font-size: 3.8rem;
  font-family: var(--font-title);
  display: grid;
  height: 100%;
  width: 100%;
  justify-items: center;
  min-height: 50px;
`;

export const RowTabsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5rem;
`;

export const InfoCardTableContainer = styled.div`
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
  position: relative;
  min-height: 100px;
`;

export const InfoHeaderTable = styled.div`
  width: 100;
  min-height: 25px;
  display: grid;
  place-items: center;
  padding: 1.3rem;
`;

export const InfoContentTable = styled.div`
  padding-top: 1.3rem;
`;
