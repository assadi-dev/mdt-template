import React from "react";
import { HomePageContainer, MainContent } from "./Home.styled";
import RowCardsInfos from "./RowCardsInfos";
import RowTabsCards from "./RowTabsCards";

const Home = () => {
  return (
    <HomePageContainer>
      <RowCardsInfos />
      <MainContent>
        <RowTabsCards />
      </MainContent>
    </HomePageContainer>
  );
};

export default Home;
