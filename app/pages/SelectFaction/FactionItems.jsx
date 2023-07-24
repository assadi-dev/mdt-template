import React, { useCallback } from "react";
import { FactionItemContainer } from "./SelectFaction.styled";
import { Link } from "react-router-dom";

const FactionItems = ({ faction, index, onSelectFaction, ...props }) => {
  const src = faction ? faction.emblem : "";

  const handleMouseOver = useCallback(() => {
    onSelectFaction(faction);
  }, []);

  return (
    <Link to={`/connexion/${faction.short_name}`}>
      <FactionItemContainer emblem={src} onMouseOver={handleMouseOver} />
    </Link>
  );
};

export default FactionItems;
