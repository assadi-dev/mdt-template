import React from "react";
import {
  InfoCardTableContainer,
  InfoHeaderTable,
  RowTabsCardsContainer,
} from "./Home.styled";
import InfoCardTable from "./Components/InfoCardTable";

const RowTabsCards = () => {
  return (
    <RowTabsCardsContainer>
      <InfoCardTable title="Agent en Service"></InfoCardTable>
      <InfoCardTable title="Individus Recherché"></InfoCardTable>
      <InfoCardTable title="Prochaines  convocations"></InfoCardTable>
      <InfoCardTable title="Jugement en attente"></InfoCardTable>
    </RowTabsCardsContainer>
  );
};

export default RowTabsCards;
