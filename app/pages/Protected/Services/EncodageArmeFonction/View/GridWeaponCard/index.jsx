import React from "react";
import { GridArmesCard } from "../../../../Mdt/Encodage/Armes/Armes.styled";
import CardArmes from "../../../../Mdt/Encodage/Armes/cardArmes";

const GridWeaponCard = ({ collections, searchWeapon }) => {
  return (
    <GridArmesCard>
      <CardArmes />
      <CardArmes />
      <CardArmes />
      <CardArmes />
      <CardArmes />
      <CardArmes />
      <CardArmes />
      <CardArmes />
    </GridArmesCard>
  );
};

export default GridWeaponCard;
