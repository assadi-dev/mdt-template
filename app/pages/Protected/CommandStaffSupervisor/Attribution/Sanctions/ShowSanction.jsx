import React from "react";
import ShowActionButton from "../../../../../components/Button/ShowActionButton";
import { TableAction } from "../../../../../components/DataTable/DataTable.styled";

const ShowSanction = ({ sanctionData, ...props }) => {
  return (
    <TableAction>
      <ShowActionButton {...props} />
    </TableAction>
  );
};

export default ShowSanction;
