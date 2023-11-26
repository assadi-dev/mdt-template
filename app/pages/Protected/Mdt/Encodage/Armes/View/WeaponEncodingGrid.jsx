import React from "react";
import { GridArmesCard } from "../Armes.styled";
import CardArmes from "../cardArmes";

const WeaponEncodingGrid = ({
  collections = [],
  status = "pending",
  searchValue = "",
}) => {
  const noFoundMessage = searchValue
    ? "  Désolé Aucun ne correpond à votre recherche"
    : "Auncun agent inscrit";

  return (
    <>
      {status == "complete" ? (
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
