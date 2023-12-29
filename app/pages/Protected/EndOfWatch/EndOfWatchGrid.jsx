import React from "react";
import { EndOfWatchGridCards } from "./EndOFWatch.styled";
import EndOfWatchCards from "./EndOfWatchCards";

const EndOfWatchGrid = ({ collections, searchAgent }) => {
  return (
    <EndOfWatchGridCards>
      <EndOfWatchCards />
      <EndOfWatchCards />
      <EndOfWatchCards />
      <EndOfWatchCards />
      <EndOfWatchCards />
      <EndOfWatchCards />
    </EndOfWatchGridCards>
  );
};

export default EndOfWatchGrid;
