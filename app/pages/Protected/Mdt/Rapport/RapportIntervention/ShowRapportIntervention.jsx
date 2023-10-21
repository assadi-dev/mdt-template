import React from "react";
import { TableAction } from "../../../../../components/DataTable/DataTable.styled";
import ShowActionButton from "../../../../../components/Button/ShowActionButton";

const ShowRapportIntervention = ({
  raaportIntervention,
  onShowRappprt,
  ...props
}) => {
  const handleClick = () => {
    onShowRappprt(raaportIntervention);
  };
  return (
    <TableAction>
      <ShowActionButton className="bg-show-btn" onClick={handleClick} />
    </TableAction>
  );
};

export default ShowRapportIntervention;
