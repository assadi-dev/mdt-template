import React from "react";
import ShowActionButton from "../../../../../components/Button/ShowActionButton";
import { TableAction } from "../../../../../components/DataTable/DataTable.styled";

const ShowSanction = ({
  sanctionData,
  onShowSanction = () => {},
  ...props
}) => {
  const handleClick = () => {
    onShowSanction(sanctionData);
  };

  return (
    <TableAction>
      <ShowActionButton {...props} onClick={handleClick} />
    </TableAction>
  );
};

export default ShowSanction;
