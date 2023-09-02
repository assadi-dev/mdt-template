import React from "react";
import Select from "react-select";

const SelectAsync = ({ ...props }) => {
  return (
    <Select
      cacheOptions
      classNamePrefix="theme-custom"
      classNames={{
        option: (state) => state.isSelected && "theme-custom-option-selected",
      }}
      {...props}
    />
  );
};

export default SelectAsync;
