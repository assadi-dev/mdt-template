import React from "react";
import {
  CardArmesBody,
  CardContainer,
  IconCardContainer,
} from "./CardArmes.styled";
import { GunIcon } from "../../../../../../components/Svg/MDT.icon";

const CardArmes = ({ armesData, ...props }) => {
  return (
    <CardContainer className="bg-card-item-alt">
      <IconCardContainer className="bg-icon-card-item">
        <GunIcon />
      </IconCardContainer>
      <CardArmesBody>
        <p>123456</p>
        <p>Berretta</p>
        <p>Nom Prenom</p>
      </CardArmesBody>
    </CardContainer>
  );
};

export default CardArmes;
