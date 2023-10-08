import React from "react";
import { TableAction } from "../../../../../components/DataTable/DataTable.styled";
import ShowActionButton from "../../../../../components/Button/ShowActionButton";

const ShowDossierFussilade = () => {
  return (
    <TableAction>
      <ShowActionButton className="bg-show-btn" />
    </TableAction>
  );
};

export default ShowDossierFussilade;
