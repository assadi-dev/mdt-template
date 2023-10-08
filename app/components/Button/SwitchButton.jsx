import React from "react";
import Toggle from "react-toggle";

const SwitchButton = ({ defaultChecked, onChange, ...props }) => {
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

export default SwitchButton;
