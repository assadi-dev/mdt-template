import React from "react";
import {
  CardAquisitionItem,
  RowAcquisitionContainer,
} from "./RowAcuisition.styled";
import { stateIcons } from "../listRapportView";
import CardAcquisition from "./CardAcquisition";

const RowAcquisition = () => {
  return (
    <>
      <RowAcquisitionContainer>
        <CardAcquisition labelCard="Relation Civiles" state="good" />
        <CardAcquisition labelCard="Contrôle routier" state="bad" />
        <CardAcquisition labelCard="Procèdures" state="good" />
        <CardAcquisition labelCard="Conduite" state="warning" />
      </RowAcquisitionContainer>
      <RowAcquisitionContainer>
        <CardAcquisition labelCard="Déontologie" state="good" />
        <CardAcquisition labelCard="Respect de la hierarchie" state="bad" />
        <CardAcquisition labelCard="Terrain" state="bad" />
        <CardAcquisition labelCard="Calls radio" state="warning" />
      </RowAcquisitionContainer>
    </>
  );
};

export default RowAcquisition;
