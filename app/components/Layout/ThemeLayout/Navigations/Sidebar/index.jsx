import React, { useLayoutEffect, useRef } from "react";
import { SidebarWrapper } from "../../ThemeLayout.styled";
import { SibarListCOntainer, SidebarHeader } from "./Sidebar.styled";
import SidebarItems from "./SidebarItems";
import { sidebarRoutes } from "../../../../../routes/sidebarRoutes";
import { useSelector } from "react-redux";
import { factionsCollections } from "../../../../../config/factions";

const Sidebar = () => {
  const sideBarHeaderRef = useRef(null);
  const authenticateUser = useSelector((state) => state.AuthenticateReducer);
  const faction = authenticateUser.faction;

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
        {sidebarRoutes.map((item, i) => (
          <SidebarItems key={i} item={item} />
        ))}
      </SibarListCOntainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
