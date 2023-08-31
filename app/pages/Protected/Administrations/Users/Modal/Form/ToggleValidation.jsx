import React from "react";
import Toggle from "react-toggle";

const ToggleValidation = ({ defaultChecked, onChange, ...props }) => {
  return (
    <Toggle
      id="validate-status"
      defaultChecked={defaultChecked}
      aria-labelledby="validate-label"
      onChange={onChange}
      {...props}
    />
  );
};

export default ToggleValidation;
