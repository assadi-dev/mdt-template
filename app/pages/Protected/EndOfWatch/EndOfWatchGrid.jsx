import React from "react";
import { EndOfWatchGridCards } from "./EndOFWatch.styled";
import EndOfWatchCards from "./EndOfWatchCards";

const EndOfWatchGrid = ({ collections = [], searchAgent }) => {
  return (
    <EndOfWatchGridCards>
      {collections.length > 0
        ? collections.map((agent) => (
            <EndOfWatchCards key={agent.id} agent={agent} />
          ))
        : "Aucun resultat"}
    </EndOfWatchGridCards>
  );
};

export default EndOfWatchGrid;
