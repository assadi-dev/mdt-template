import React from "react";
import ReactDropdown from "react-dropdown";
import { nominalOptionValues } from "../../../../../../../../../../config/options";

const SelectNominal = ({
  nominalOptions = nominalOptionValues,
  onChange,
  value,
  ...props
}) => {
  return (
    <ReactDropdown
      {...props}
      options={nominalOptionValues}
      className="dropdown-select-custom"
      value={value}
      onChange={onChange}
      placeholder={"Selectionner le multiplicateur"}
    />
  );
};

export default SelectNominal;
