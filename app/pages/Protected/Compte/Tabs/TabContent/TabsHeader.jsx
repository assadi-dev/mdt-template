import React from "react";
import { HeaderTabCivilSelect } from "../../Compte.styled";
import { Link, NavLink } from "react-router-dom";

const TabsHeader = ({ onSelect, ...props }) => {
  const handleSelect = (value) => {
    console.log(value);
    if (!onSelect) return;
    onSelect(section);
  };

  return (
    <HeaderTabCivilSelect className="header-tab-select-container">
      <NavLink
        to="info-personel"
        className={(e) =>
          e.isActive
            ? "header-tab-btn bg-selected-theme-color"
            : "header-tab-btn"
        }
      >
        Info Personnel{" "}
      </NavLink>
      <NavLink
        to="permis-ppa"
        className={(e) =>
          e.isActive
            ? "header-tab-btn bg-selected-theme-color"
            : "header-tab-btn"
        }
      >
        Permis / PPA{" "}
      </NavLink>
      <NavLink
        to="armes-vehicule-attribue"
        className={(e) =>
          e.isActive
            ? "header-tab-btn bg-selected-theme-color"
            : "header-tab-btn"
        }
        onClick={() => handleSelect("armes-vehicule-attribue")}
      >
        Arme et Véhicule attribué{" "}
      </NavLink>
      <NavLink
        to="sanction"
        className={(e) =>
          e.isActive
            ? "header-tab-btn bg-selected-theme-color"
            : "header-tab-btn"
        }
      >
        Sanction
      </NavLink>
    </HeaderTabCivilSelect>
  );
};

export default TabsHeader;
