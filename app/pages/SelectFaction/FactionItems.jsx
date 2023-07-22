import React, { useCallback } from "react";
import { FactionItem } from "./SelectFaction.styled";
import { Link } from "react-router-dom";

const FactionItems = ({ faction, index, onSelectFaction }) => {
  const src = faction ? faction.emblem : "";

  const handleMouseOver = useCallback(() => {
    onSelectFaction(faction);
  }, []);

  return (
    <Link to={`/connexion/${faction.short_name}`}>
      <FactionItem img={src} onMouseOver={handleMouseOver}></FactionItem>
    </Link>
  );
};

export default FactionItems;
