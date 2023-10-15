import React from "react";
import { CardAquisitionItem, StatIconContainer } from "./RowAcuisition.styled";
import { stateIcons } from "../../listRapportView";

const CardAcquisition = ({
  labelCard = "",
  state = "bad",
  name,
  onClickAcuiqition,
  ...props
}) => {
  const STATE_ICON = stateIcons[state].icon;
  const CLASSNAME_ICON = [state];

  return (
    <CardAquisitionItem {...props}>
      <p>{labelCard} </p>
      <StatIconContainer
        className={CLASSNAME_ICON.join(" ")}
        data-acquisition={name}
        onClick={onClickAcuiqition}
        type="button"
      >
        <STATE_ICON data-acquisition={name} />
      </StatIconContainer>
    </CardAquisitionItem>
  );
};

export default CardAcquisition;
