import React from "react";
import {
  CardArmesBody,
  CardContainer,
  IconCardContainer,
} from "./CardArmes.styled";
import { GunIcon } from "../../../../../../components/Svg/MDT.icon";

const CardArmes = ({ owner, ...props }) => {
  const OWNER_NAME = `${owner?.firstname} ${owner?.lastname}`;

  return (
    <CardContainer className="bg-card-item-alt">
      <IconCardContainer className="bg-icon-card-item">
        <GunIcon />
      </IconCardContainer>
      <CardArmesBody>
        <p>{owner?.serialNumber}</p>
        <p>{owner?.type}</p>
        <p>{OWNER_NAME}</p>
      </CardArmesBody>
    </CardContainer>
  );
};

export default CardArmes;
