import React from "react";
import { TrombinoscopGridCards } from "./Trombinoscop.styled";
import AgentCard from "./AgentCard";

const TrombinoscopGrid = ({ status = "pending", collections = [] }) => {
  return (
    <TrombinoscopGridCards>
      {status == "complete" && collections.length > 0
        ? collections?.map((agent) => (
            <AgentCard key={agent.idAgent} agent={agent} />
          ))
        : "Aucun agent inscrit"}
    </TrombinoscopGridCards>
  );
};

export default TrombinoscopGrid;
