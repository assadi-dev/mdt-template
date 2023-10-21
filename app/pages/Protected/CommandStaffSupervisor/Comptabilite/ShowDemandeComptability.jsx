import React from "react";
import { TableAction } from "../../../../components/DataTable/DataTable.styled";
import ShowActionButton from "../../../../components/Button/ShowActionButton";

const ShowDemandeComptability = ({ rapport, onShowDemande = () => {} }) => {
  const handleClickShow = () => {
    onShowDemande(rapport);
  };

  return (
    <TableAction>
      <ShowActionButton className="bg-show-btn" onClick={handleClickShow} />
    </TableAction>
  );
};

export default ShowDemandeComptability;
