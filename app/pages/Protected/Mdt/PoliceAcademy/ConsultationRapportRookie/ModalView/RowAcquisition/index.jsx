import React from "react";
import {
  CardAquisitionItem,
  RowAcquisitionContainer,
} from "./RowAcuisition.styled";

import CardAcquisition from "./CardAcquisition";
import { rookieReportFormValues } from "../../../../Rapport/RapportRookie/ModalView/Form/RookieReportSchema";
import { sateNotation } from "../listRapportView";

const RowAcquisition = ({
  acquisitions = rookieReportFormValues.acquisitions,
}) => {
  const {
    civilRelationship,
    roadControl,
    procedures,
    drive,
    deontology,
    respctingHierarchy,
    spotArea,
    callRadio,
  } = acquisitions;

  console.log();

  return (
    <>
      <RowAcquisitionContainer>
        <CardAcquisition
          labelCard="Relation Civiles"
          state={sateNotation[civilRelationship]}
        />
        <CardAcquisition
          labelCard="Contrôle routier"
          state={sateNotation[roadControl]}
        />
        <CardAcquisition
          labelCard="Procèdures"
          state={sateNotation[procedures]}
        />
        <CardAcquisition labelCard="Conduite" state={sateNotation[drive]} />
      </RowAcquisitionContainer>
      <RowAcquisitionContainer>
        <CardAcquisition
          labelCard="Déontologie"
          state={sateNotation[deontology]}
        />
        <CardAcquisition
          labelCard="Respect de la hierarchie"
          state={sateNotation[respctingHierarchy]}
        />
        <CardAcquisition labelCard="Terrain" state={sateNotation[spotArea]} />
        <CardAcquisition
          labelCard="Calls radio"
          state={sateNotation[callRadio]}
        />
      </RowAcquisitionContainer>
    </>
  );
};

export default RowAcquisition;
