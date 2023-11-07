import React from "react";
import { TableAction } from "../../../../../components/DataTable/DataTable.styled";
import ShowActionButton from "../../../../../components/Button/ShowActionButton";

const DepotBtn = ({ data, onClickShowDepot = () => {}, ...props }) => {
  const handleClick = () => {
    onClickShowDepot(data);
  };

  return (
    <TableAction {...props}>
      <ShowActionButton className="bg-show-btn" onClick={handleClick} />
    </TableAction>
  );
};

export default DepotBtn;
