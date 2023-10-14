import React from "react";
import {
  GunIcon,
  VehicleIcon,
} from "../../../../../../components/Svg/MDT.icon";
import {
  CardVehiculesBody,
  CardContainer,
  IconCardContainer,
} from "./CardVehicules.styled";

const CardVehicule = ({ vehiculeData, ...props }) => {
  return (
    <CardContainer className="bg-card-item-alt">
      <IconCardContainer className="bg-icon-card-item">
        <VehicleIcon />
      </IconCardContainer>
      <CardVehiculesBody>
        <p>{vehiculeData?.plaque} </p>
        <p className="text-upper">{vehiculeData?.type}</p>
        <p>{`${vehiculeData?.firstname}  ${vehiculeData?.lastname}`}</p>
      </CardVehiculesBody>
    </CardContainer>
  );
};

export default CardVehicule;
