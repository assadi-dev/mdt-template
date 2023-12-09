import React from "react";
import Select from "react-select";

const SelectAsync = ({ ...props }) => {
  return (
    <Select
      styles={customStyle}
      classNamePrefix="theme-custom"
      classNames={{
        option: (state) => state.isSelected && "theme-custom-option-selected",
      }}
      {...props}
    />
  );
};

const customStyle = {
  input: (basicStyle, state) => ({
    ...basicStyle,
    color: "inherit",
  }),
};

export default SelectAsync;
