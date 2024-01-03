import React from "react";
import { SwitchAccusationBtn } from "../../../Case.styled";

const AttemptSwitchBtn = ({ infraction, onChange = () => {}, ...props }) => {
  const handleChecked = (e) => {
    const checked = e.target.checked;
    infraction.attempt = checked ? 0.25 : 1;
    onChange(infraction);
  };

  const DEFAULT_VALUE = infraction.attempt == 0.25 ? true : false;

  return (
    <SwitchAccusationBtn
      className="mx-auto text-center toggle-custom"
      onChange={handleChecked}
      defaultChecked={DEFAULT_VALUE}
      {...props}
    />
  );
};

export default AttemptSwitchBtn;
