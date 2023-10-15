import React from "react";
import { CardAquisitionItem, StatIconContainer } from "./RowAcuisition.styled";
import { stateIcons } from "../listRapportView";

const CardAcquisition = ({ labelCard = "", state = "bad", ...props }) => {
  const STATE_ICON = stateIcons[state].icon;
  const CLASSNAME_ICON = [state];

  return (
    <CardAquisitionItem {...props}>
      <p>{labelCard} </p>
      <StatIconContainer className={CLASSNAME_ICON.join(" ")}>
        <STATE_ICON />
      </StatIconContainer>
    </CardAquisitionItem>
  );
};

export default CardAcquisition;
