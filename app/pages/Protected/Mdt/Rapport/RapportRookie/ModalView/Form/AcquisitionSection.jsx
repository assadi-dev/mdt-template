import React, { useState } from "react";
import { AcuisitionSectionContainer } from "../../RapportRookie.styled";
import RowAcquisition from "./RowAcquisition";
import { stateValue } from "../listRapportView";

const AcquisitionSection = () => {
  const [listAquisition, setListAcquisition] = useState({
    relationCivil: 0,
    controlRoutier: 0,
    procedure: 0,
    conduite: 0,
    deontologie: 0,
    respectHierarchie: 0,
    terrain: 0,
    callRadio: 0,
  });

  const handleClickState = (name) => {
    setListAcquisition((current) => {
      if (current[name] >= stateValue.length) current[name] = 0;
      return {
        ...current,
        [name]: (current[name] += 1),
      };
    });
  };

  return (
    <AcuisitionSectionContainer>
      <p className="text-center mb-3"> Acquisitions </p>
      <RowAcquisition
        listAquisition={listAquisition}
        onClickAcuiqition={handleClickState}
      />
    </AcuisitionSectionContainer>
  );
};

export default AcquisitionSection;
