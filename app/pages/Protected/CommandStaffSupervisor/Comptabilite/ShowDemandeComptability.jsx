import React from "react";
import { TableAction } from "../../../../components/DataTable/DataTable.styled";
import ShowActionButton from "../../../../components/Button/ShowActionButton";

const ShowDemandeComptability = () => {
  return (
    <TableAction>
      <ShowActionButton className="bg-show-btn" />
    </TableAction>
  );
};

export default ShowDemandeComptability;
