import React from "react";
import { GridArmesCard } from "../../../../Mdt/Encodage/Armes/Armes.styled";
import CardArmes from "../../../../Mdt/Encodage/Armes/cardArmes";

const GridWeaponCard = ({ collections, searchWeapon }) => {
  console.log(collections);

  return (
    <GridArmesCard>
      {collections.map((owner) => (
        <CardArmes key={owner.id} owner={owner} />
      ))}
    </GridArmesCard>
  );
};

export default GridWeaponCard;
