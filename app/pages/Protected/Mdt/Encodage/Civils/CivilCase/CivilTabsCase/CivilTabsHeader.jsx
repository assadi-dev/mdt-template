import React from "react";
import { CivilTabsHeaderSelect } from "./CivilTabs.styled";
import { NavLink } from "react-router-dom";
import uniqid from "uniqid";

const CivilTabsHeader = ({ idCivil, listeNav }) => {
  return (
    <CivilTabsHeaderSelect className="header-tab-select-container">
      {listeNav?.map((nav) => (
        <NavLink
          key={uniqid()}
          to={`/mdt/encodage/civil/${idCivil}/${nav.link}`}
          className={(e) =>
            e.isActive
              ? "header-tab-btn bg-selected-theme-color"
              : "header-tab-btn"
          }
        >
          {nav.label}
        </NavLink>
      ))}
    </CivilTabsHeaderSelect>
  );
};

export default CivilTabsHeader;
