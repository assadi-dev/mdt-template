import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SidebarWrapper } from "../../ThemeLayout.styled";
import { SibarListCOntainer, SidebarHeader } from "./Sidebar.styled";
import SidebarItems from "./SidebarItems";
import { sidebarRoutes } from "../../../../../routes/sidebarRoutes";
import { useSelector } from "react-redux";
import { factionsCollections } from "../../../../../config/factions";
import { checkRoutes, filtrerEmptyObjets, isAdmin } from "./helper";
import useSidebarNav from "./Hooks/useSidebarNav";

const Sidebar = () => {
  const sideBarHeaderRef = useRef(null);
  const authenticateUser = useSelector((state) => state.AuthenticateReducer);
  const { faction, roles } = authenticateUser;
  const { accesRoutes } = useSidebarNav();

  useLayoutEffect(() => {
    if (!faction) return;

    const factionEmblem = faction ? factionsCollections[faction].emblem : "";
    if (sideBarHeaderRef.current)
      sideBarHeaderRef.current.style.backgroundImage = `url(${factionEmblem})`;
  }, [sideBarHeaderRef, faction]);

  return (
    <SidebarWrapper className="sidebar">
      <SidebarHeader ref={sideBarHeaderRef} />
      <SibarListCOntainer>
        {accesRoutes.map((item, i) => (
          <SidebarItems key={i} item={item} />
        ))}
      </SibarListCOntainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
