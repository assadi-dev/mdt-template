import React from "react";
import { StateIcon } from "./DemandeComptabilite.styled";
import { statelistIcon } from "./enum";

const StatusCell = ({ status }) => {
  console.log(status);
  if (!status) {
    return (
      <StateIcon
        className={statelistIcon[0].name}
        title={statelistIcon[0].label}
      >
        {statelistIcon[0].icon}{" "}
      </StateIcon>
    );
  } else {
    const statusData = statelistIcon?.find((state) => state.name == status);
    return (
      <StateIcon className={statusData.name} title={statusData.label}>
        {statusData.icon}{" "}
      </StateIcon>
    );
  }
};

export default StatusCell;
