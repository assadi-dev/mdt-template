import React from "react";
import { SwitchAccusationBtn } from "../../../Case.styled";

const ComplicitySwitchBtn = ({ infraction, onChange = () => {}, ...props }) => {
  const handleChecked = (e) => {
    const checked = e.target.checked;
    infraction.complicity = checked ? 0.6 : 1;
    onChange(infraction);
  };

  const DEFAULT_VALUE = infraction.complicity == 0.6 ? true : false;
  return (
    <SwitchAccusationBtn
      className="mx-auto text-center toggle-custom"
      onChange={handleChecked}
      defaultChecked={DEFAULT_VALUE}
      {...props}
    />
  );
};

export default ComplicitySwitchBtn;
