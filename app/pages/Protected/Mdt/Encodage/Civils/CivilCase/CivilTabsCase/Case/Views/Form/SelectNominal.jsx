import React from "react";
import ReactDropdown from "react-dropdown";

const SelectNominal = ({ nominaloption, ...props }) => {
  return (
    <ReactDropdown
      {...props}
      options={nominaloption}
      className="dropdown-select-custom"
    />
  );
};

export default SelectNominal;
