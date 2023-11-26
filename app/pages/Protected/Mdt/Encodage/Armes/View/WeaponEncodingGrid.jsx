import React from "react";
import { GridArmesCard } from "../Armes.styled";
import CardArmes from "../cardArmes";

const WeaponEncodingGrid = ({
  collections = [],
  status = "pending",
  searchValue = "",
}) => {
  const noFoundMessage = searchValue
    ? "  Désolé Aucun arme ne correpond à votre recherche"
    : "Auncun arme inscrit";

  return (
    <>
      {status == "complete" && collections.lengt > 0 ? (
        <GridArmesCard>
          {collections.map((owner) => (
            <CardArmes key={owner?.id} owner={owner} />
          ))}
        </GridArmesCard>
      ) : (
        noFoundMessage
      )}
    </>
  );
};

export default WeaponEncodingGrid;
