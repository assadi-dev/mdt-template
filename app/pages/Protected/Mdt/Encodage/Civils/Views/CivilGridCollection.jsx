import React from "react";
import { GridCivilCard, NoFounMessage } from "../Civils.styled";
import Cards from "../Cards";

const CivilGridCollection = ({
  status = "pending",
  collections = [],
  searchCivil = "",
}) => {
  const noFoundMessage = searchCivil ? (
    <NoFounMessage> Désolé Aucun ne correpond à votre recherche</NoFounMessage>
  ) : (
    "Auncun agent inscrit"
  );

  return (
    <>
      {status == "complete" && collections.length > 0 ? (
        <GridCivilCard>
          {collections.map((civil) => (
            <Cards key={civil.id} id={civil.id} civilData={civil} />
          ))}
        </GridCivilCard>
      ) : (
        noFoundMessage
      )}
    </>
  );
};

export default CivilGridCollection;
