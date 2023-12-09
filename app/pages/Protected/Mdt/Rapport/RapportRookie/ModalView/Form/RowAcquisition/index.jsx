import React from "react";
import { RowAcquisitionContainer } from "./RowAcuisition.styled";
import CardAcquisition from "./CardAcquisition";
import { stateValue } from "../../listRapportView";

const RowAcquisition = ({ listAquisition, onClickAcuiqition = () => {} }) => {
  const handleClickState = (name) => {
    onClickAcuiqition(name);
  };

  return (
    <>
      <RowAcquisitionContainer>
        <CardAcquisition
          labelCard="Relation Civiles"
          state={stateValue[listAquisition?.civilRelationship]}
          name="civilRelationship"
          onClickAcuiqition={() => handleClickState("civilRelationship")}
        />
        <CardAcquisition
          labelCard="Contrôle routier"
          onClickAcuiqition={() => handleClickState("roadControl")}
          state={stateValue[listAquisition?.roadControl]}
        />
        <CardAcquisition
          labelCard="Procèdures"
          onClickAcuiqition={() => handleClickState("procedures")}
          state={stateValue[listAquisition?.procedures]}
        />
        <CardAcquisition
          labelCard="Conduite"
          onClickAcuiqition={() => handleClickState("drive")}
          state={stateValue[listAquisition?.drive]}
        />
      </RowAcquisitionContainer>
      <RowAcquisitionContainer>
        <CardAcquisition
          labelCard="Déontologie"
          onClickAcuiqition={() => handleClickState("deontology")}
          state={stateValue[listAquisition?.deontology]}
        />
        <CardAcquisition
          labelCard="Respect de la hierarchie"
          onClickAcuiqition={() => handleClickState("respctingHierarchy")}
          state={stateValue[listAquisition?.respctingHierarchy]}
        />
        <CardAcquisition
          labelCard="Terrain"
          onClickAcuiqition={() => handleClickState("spotArea")}
          state={stateValue[listAquisition?.spotArea]}
        />
        <CardAcquisition
          labelCard="Calls radio"
          onClickAcuiqition={() => handleClickState("callRadio")}
          state={stateValue[listAquisition?.callRadio]}
        />
      </RowAcquisitionContainer>
    </>
  );
};

export default RowAcquisition;
