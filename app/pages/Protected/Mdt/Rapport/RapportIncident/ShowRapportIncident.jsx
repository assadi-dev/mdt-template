import React from "react";
import ShowActionButton from "../../../../../components/Button/ShowActionButton";
import { TableAction } from "../../../../../components/DataTable/DataTable.styled";

const ShowRapportIncident = () => {
  return (
    <TableAction>
      <ShowActionButton className="bg-show-btn" />
    </TableAction>
  );
};

export default ShowRapportIncident;
