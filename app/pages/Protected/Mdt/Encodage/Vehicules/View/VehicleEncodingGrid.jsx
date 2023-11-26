import React from "react";
import { GridVehiculesCard } from "../Vehicules.styled";
import CardVehicule from "../CardVehicule";

const VehicleEncodingGrid = ({
  collections = [],
  status = "pending",
  searchValue,
}) => {
  const noFoundMessage = searchValue
    ? "  Désolé Aucun véhicule ne correpond à votre recherche"
    : "Auncun vehicule inscrit";

  return (
    <>
      {status == "complete" && collections.length > 0 ? (
        <GridVehiculesCard>
          {collections.map((owner) => (
            <CardVehicule key={owner.id} vehiculeData={owner} />
          ))}
        </GridVehiculesCard>
      ) : (
        noFoundMessage
      )}
    </>
  );
};

export default VehicleEncodingGrid;
