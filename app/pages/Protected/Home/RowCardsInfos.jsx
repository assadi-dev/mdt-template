import React from "react";
import { RowHeaderCards } from "./Home.styled";
import InfoCards from "./Components/InfoCards";

const RowCardsInfos = () => {
  return (
    <RowHeaderCards>
      <InfoCards title="Dépot de plaintes" className="theme-dashboard-card" />
      <InfoCards title="Objets Saisie" className="theme-dashboard-card" />
      <InfoCards title="Civils encoder" className="theme-dashboard-card" />
    </RowHeaderCards>
  );
};

export default RowCardsInfos;
