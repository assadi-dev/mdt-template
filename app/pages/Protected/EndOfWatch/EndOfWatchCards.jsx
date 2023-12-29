import React from "react";
import {
  EndOfWatchCardsContainer,
  EndOfWatchCardsPicture,
  EndOfWatchDetail,
  LogoFaction,
} from "./EndOFWatch.styled";
import { factionsCollections } from "../../../config/factions";

const picture =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const EndOfWatchCards = ({ agent }) => {
  const AGENT_FACTION = "sasp";

  const style = {
    backgroundImage: `url(${factionsCollections[AGENT_FACTION].emblem})`,
  };

  return (
    <EndOfWatchCardsContainer>
      <EndOfWatchCardsPicture>
        <img src={picture} alt="photo agent" />
        <LogoFaction style={style} />
      </EndOfWatchCardsPicture>
      <EndOfWatchDetail>
        <p>
          <small>off.ii</small> Monica Leon
        </p>
        <p>{factionsCollections[AGENT_FACTION].full_name}</p>
        <p>
          <span>EOW: </span> 29 juillet 2023{" "}
        </p>
        <p>
          <span>CAUSE: </span> COVID 19{" "}
        </p>
      </EndOfWatchDetail>
    </EndOfWatchCardsContainer>
  );
};

export default EndOfWatchCards;
