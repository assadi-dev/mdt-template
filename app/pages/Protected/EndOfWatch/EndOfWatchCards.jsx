import React from "react";
import {
  EndOfWatchCardsContainer,
  EndOfWatchCardsPicture,
  EndOfWatchDetail,
  LogoFaction,
} from "./EndOFWatch.styled";
import { factionsCollections } from "../../../config/factions";
import { formatDateFullMonth } from "../../../services/utils/dateFormat";
import { cleanNameAgent, noPhoto } from "../../../services/utils/user";

const picture =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const EndOfWatchCards = ({ agent }) => {
  const AGENT_FACTION = agent?.faction;
  const DATE_OF_EOW = agent.date.date || new Date();

  const style = {
    backgroundImage: `url(${factionsCollections[AGENT_FACTION].emblem})`,
  };

  return (
    <EndOfWatchCardsContainer>
      <EndOfWatchCardsPicture>
        <img
          src={noPhoto(agent.gender)}
          alt={`photo agent of ${cleanNameAgent(
            agent?.firstname,
            agent?.lastname
          )}`}
        />
        <LogoFaction style={style} />
      </EndOfWatchCardsPicture>
      <EndOfWatchDetail>
        <p className="text-upper">
          <small>off.ii</small>{" "}
          <strong>{cleanNameAgent(agent?.firstname, agent?.lastname)}</strong>
        </p>
        <p className="text-upper">
          {factionsCollections[AGENT_FACTION].full_name}
        </p>
        <p className="text-upper">
          <span>EOW: </span> {formatDateFullMonth(DATE_OF_EOW)}
        </p>
        <p className="text-upper">
          <span>CAUSE: </span> {agent.reason}{" "}
        </p>
      </EndOfWatchDetail>
    </EndOfWatchCardsContainer>
  );
};

export default EndOfWatchCards;
