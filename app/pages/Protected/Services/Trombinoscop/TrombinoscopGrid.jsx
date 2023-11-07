import React from "react";
import { NoFounMessage, TrombinoscopGridCards } from "./Trombinoscop.styled";
import AgentCard from "./AgentCard";

const TrombinoscopGrid = ({
  status = "pending",
  collections = [],
  searchAgent = "",
}) => {
  const noFoundMessage = searchAgent ? (
    <NoFounMessage> Désolé Aucun ne correpond à votre recherche</NoFounMessage>
  ) : (
    "Auncun agent inscrit"
  );

  return (
    <TrombinoscopGridCards>
      {status == "complete" && collections.length > 0
        ? collections?.map((agent) => (
            <AgentCard key={agent.idAgent} agent={agent} />
          ))
        : noFoundMessage}
    </TrombinoscopGridCards>
  );
};

export default TrombinoscopGrid;
