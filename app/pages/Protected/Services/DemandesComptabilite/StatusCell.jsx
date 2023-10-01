import React from "react";
import { StateIcon } from "./DemandeComptabilite.styled";
import { statelistIcon } from "./enum";
import { Tooltip } from "react-tooltip";

const StatusCell = ({ status }) => {
  console.log(status);
  if (!status) {
    return (
      <StateIcon className={statelistIcon[0].name}>
        {statelistIcon[0].icon}{" "}
      </StateIcon>
    );
  } else {
    const statusData = statelistIcon?.find((state) => state.name == status);
    return (
      <>
        <StateIcon id="toto" className={statusData.name}>
          {statusData.icon}
        </StateIcon>
        <Tooltip
          className="theme-bg-tooltip"
          anchorSelect={`.${statusData.name}`}
          place="bottom"
        >
          {statusData.label}
        </Tooltip>
      </>
    );
  }
};

export default StatusCell;
