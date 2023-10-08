import React from "react";
import { TableAction } from "../../../../../components/DataTable/DataTable.styled";
import Toggle from "react-toggle";

const StatePlainte = ({ defaultChecked, onChange, ...props }) => {
  return (
    <TableAction>
      <Toggle
        id="validate-status"
        defaultChecked={defaultChecked}
        aria-labelledby="validate-label"
        onChange={onChange}
        {...props}
      />{" "}
    </TableAction>
  );
};

export default StatePlainte;
