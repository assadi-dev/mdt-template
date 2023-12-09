import React, { useState } from "react";
import { AcuisitionSectionContainer } from "../../RapportRookie.styled";
import RowAcquisition from "./RowAcquisition";
import { stateValue } from "../listRapportView";

const AcquisitionSection = ({ getAcuisitionValue = () => {} }) => {
  const [listAquisition, setListAcquisition] = useState({
    civilRelationship: 0,
    roadControl: 0,
    procedures: 0,
    drive: 0,
    deontology: 0,
    respctingHierarchy: 0,
    spotArea: 0,
    callRadio: 0,
  });

  const handleClickState = (name) => {
    setListAcquisition((current) => {
      if (current[name] >= stateValue.length) current[name] = 0;
      const updateCurrent = {
        ...current,
        [name]: (current[name] += 1),
      };
      getAcuisitionValue(updateCurrent);
      return updateCurrent;
    });
  };

  return (
    <AcuisitionSectionContainer>
      <legend className="text-center mb-3"> Acquisitions </legend>
      <RowAcquisition
        listAquisition={listAquisition}
        onClickAcuiqition={handleClickState}
      />
    </AcuisitionSectionContainer>
  );
};

export default AcquisitionSection;
