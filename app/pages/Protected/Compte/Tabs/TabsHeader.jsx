import React from "react";
import { HeaderTabCivilSelect } from "../../Compte.styled";
import { Link } from "react-router-dom";

const TabsHeader = ({ onSelect, ...props }) => {
  const handleSelect = (value) => {
    console.log(value);
    if (!onSelect) return;
    onSelect(section);
  };

  return (
    <HeaderTabCivilSelect className="header-tab-select-container">
      <Link
        to="/info-personel"
        className="header-tab-btn bg-selected-theme-color"
      >
        Info Personnel{" "}
      </Link>
      <Link to="/permis-ppa" className="header-tab-btn">
        Permis / PPA{" "}
      </Link>
      <Link
        to="armes-vehicule-attribue"
        className="header-tab-btn"
        onClick={() => handleSelect("armes-vehicule-attribue")}
      >
        Arme et Véhicule attribué{" "}
      </Link>
      <Link to="sanction" className="header-tab-btn">
        Sanction
      </Link>
    </HeaderTabCivilSelect>
  );
};

export default TabsHeader;
