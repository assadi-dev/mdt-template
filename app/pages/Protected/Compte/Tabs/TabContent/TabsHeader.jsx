import React from "react";
import { HeaderTabCivilSelect } from "../../Compte.styled";

const TabsHeader = ({ onSelect, ...props }) => {
  const handleSelect = (value) => {
    console.log(value);
    if (!onSelect) return;
    onSelect(section);
  };

  return (
    <HeaderTabCivilSelect className="header-tab-select-container">
      <button
        className="header-tab-btn bg-selected-theme-color"
        onClick={() => handleSelect("info-personnel")}
      >
        Info Personnel{" "}
      </button>
      <button
        className="header-tab-btn"
        onClick={() => handleSelect("permis-ppa")}
      >
        Permis / PPA{" "}
      </button>
      <button
        className="header-tab-btn"
        onClick={() => handleSelect("armes-vehicule-attribue")}
      >
        Arme et Véhicule attribué{" "}
      </button>
      <button
        className="header-tab-btn"
        onClick={() => handleSelect("sanction")}
      >
        Sanction
      </button>
    </HeaderTabCivilSelect>
  );
};

export default TabsHeader;
