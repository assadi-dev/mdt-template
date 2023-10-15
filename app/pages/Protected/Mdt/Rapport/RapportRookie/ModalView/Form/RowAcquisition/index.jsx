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
          state={stateValue[listAquisition?.relationCivil]}
          name="relationCivil"
          onClickAcuiqition={() => handleClickState("relationCivil")}
        />
        <CardAcquisition
          labelCard="Contrôle routier"
          onClickAcuiqition={() => handleClickState("controlRoutier")}
          state={stateValue[listAquisition?.controlRoutier]}
        />
        <CardAcquisition
          labelCard="Procèdures"
          onClickAcuiqition={() => handleClickState("procedure")}
          state={stateValue[listAquisition?.procedure]}
        />
        <CardAcquisition
          labelCard="Conduite"
          onClickAcuiqition={() => handleClickState("conduite")}
          state={stateValue[listAquisition?.conduite]}
        />
      </RowAcquisitionContainer>
      <RowAcquisitionContainer>
        <CardAcquisition
          labelCard="Déontologie"
          onClickAcuiqition={() => handleClickState("deontologie")}
          state={stateValue[listAquisition?.deontologie]}
        />
        <CardAcquisition
          labelCard="Respect de la hierarchie"
          onClickAcuiqition={() => handleClickState("respectHierarchie")}
          state={stateValue[listAquisition?.respectHierarchie]}
        />
        <CardAcquisition
          labelCard="Terrain"
          onClickAcuiqition={() => handleClickState("terrain")}
          state={stateValue[listAquisition?.terrain]}
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
