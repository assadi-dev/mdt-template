import React from "react";
import { SidebarWrapper } from "../../ThemeLayout.styled";
import { SibarListCOntainer, SidebarHeader } from "./Sidebar.styled";
import SidebarItems from "./SidebarItems";
import { sidebarRoutes } from "../../../../../routes/sidebarRoutes";

const Sidebar = () => {
  const arrayCopy = new Array(5).fill("hello");

  return (
    <SidebarWrapper className="sidebar">
      <SidebarHeader />
      <SibarListCOntainer>
        {sidebarRoutes.map((item, i) => (
          <SidebarItems key={i} item={item} />
        ))}
      </SibarListCOntainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
