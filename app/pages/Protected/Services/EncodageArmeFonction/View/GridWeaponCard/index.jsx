import React from "react";
import { GridArmesCard } from "../../../../Mdt/Encodage/Armes/Armes.styled";
import CardArmes from "../../../../Mdt/Encodage/Armes/cardArmes";
import { EmptyMessage } from "../../EncodageArmeFonction.styled";

const GridWeaponCard = ({ collections, searchWeapon }) => {
  const iS_EMPTY = Boolean(collections.length > 0);
  const EMPTY_MESSAGE = searchWeapon
    ? "Aucun resultat"
    : "Aucune arme de fonction inscris";

  return (
    <GridArmesCard>
      {iS_EMPTY ? (
        collections.map((owner) => <CardArmes key={owner.id} owner={owner} />)
      ) : (
        <EmptyMessage>{EMPTY_MESSAGE}</EmptyMessage>
      )}
    </GridArmesCard>
  );
};

export default GridWeaponCard;
