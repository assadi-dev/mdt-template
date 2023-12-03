import React from "react";
import { TableAction } from "../../../../../components/DataTable/DataTable.styled";
import Toggle from "react-toggle";

const StatePlainte = ({
  plainte,
  defaultChecked = false,
  onChange,
  ...props
}) => {
  const handleChange = (e) => {
    const value = e.target.checked;

    onChange({ id: plainte?.id, isClassifield: value });
  };

  return (
    <TableAction>
      <Toggle
        id="validate-status"
        defaultChecked={defaultChecked}
        aria-labelledby="validate-label"
        onChange={handleChange}
        {...props}
        disabled={defaultChecked}
      />{" "}
    </TableAction>
  );
};

export default StatePlainte;
