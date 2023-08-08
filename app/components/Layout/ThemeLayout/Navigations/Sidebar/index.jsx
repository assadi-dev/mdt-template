import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SidebarWrapper } from "../../ThemeLayout.styled";
import { SibarListCOntainer, SidebarHeader } from "./Sidebar.styled";
import SidebarItems from "./SidebarItems";
import { sidebarRoutes } from "../../../../../routes/sidebarRoutes";
import { useSelector } from "react-redux";
import { factionsCollections } from "../../../../../config/factions";
import { checkRoutes, filtrerEmptyObjets } from "./helper";

const Sidebar = () => {
  const sideBarHeaderRef = useRef(null);
  const authenticateUser = useSelector((state) => state.AuthenticateReducer);
  const faction = authenticateUser.faction;
  const [accesRoutes, setAccessRoutes] = useState([]);

  useLayoutEffect(() => {
    if (!faction) return;
    const factionEmblem = faction ? factionsCollections[faction].emblem : "";
    if (sideBarHeaderRef.current)
      sideBarHeaderRef.current.style.backgroundImage = `url(${factionEmblem})`;

    let mapRoute = [...sidebarRoutes].map((sbr) => checkRoutes(sbr));
    mapRoute = filtrerEmptyObjets(mapRoute);

    setAccessRoutes((current) => (current = mapRoute));
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
