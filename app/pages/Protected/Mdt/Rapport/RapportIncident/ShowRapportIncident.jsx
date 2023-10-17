import React from "react";
import ShowActionButton from "../../../../../components/Button/ShowActionButton";
import { TableAction } from "../../../../../components/DataTable/DataTable.styled";

const ShowRapportIncident = ({ rapportIncident, onShowRapport = () => {} }) => {
  const handleClick = () => {
    onShowRapport(rapportIncident);
  };

  return (
    <TableAction>
      <ShowActionButton className="bg-show-btn" onClick={handleClick} />
    </TableAction>
  );
};

export default ShowRapportIncident;
