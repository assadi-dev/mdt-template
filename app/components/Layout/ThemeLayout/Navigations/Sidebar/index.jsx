import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SidebarWrapper } from "../../ThemeLayout.styled";
import { SibarListCOntainer, SidebarHeader } from "./Sidebar.styled";
import SidebarItems from "./SidebarItems";
import { sidebarRoutes } from "../../../../../routes/sidebarRoutes";
import { useSelector } from "react-redux";
import { factionsCollections } from "../../../../../config/factions";
import { access } from "./helper";

const Sidebar = () => {
  const sideBarHeaderRef = useRef(null);
  const authenticateUser = useSelector((state) => state.AuthenticateReducer);
  const faction = authenticateUser.faction;

  const [accesRoutes, setAccessRoutes] = useState([]);
  let authorize = [];

  const getParentRoutes = (parent) => {
    let children = { name: "", childrens: [] };
    if (parent.childrens) {
      children.name = Object.entries(parent)[0][1];
      let values = Object.entries(parent)[1][1];
      values.forEach((v) => {
        let findValue = access.find((a) => a.path.includes(v.path));
        if (findValue) children.childrens.push(v);
      });
    } else {
      if (parent.path) {
        let find = access.find((a) => a.path.includes(parent.path));
        let entrie = Object.entries(parent);

        if (find) {
          return parent;
        }
      }
    }
    if (children.childrens.length > 0) {
      return children;
    }
  };

  const checkRoutes = (route) => {
    let generateParent = { name: "", childrens: [] };
    if (route.childrens) {
      let exist = access.find((a) => a.page == route.name);

      if (exist) {
        generateParent.name = route.name;
      }

      for (let children of route.childrens) {
        if (route.childrens) {
          let findChildrens = getParentRoutes(children);

          findChildrens && findChildrens.name
            ? generateParent.childrens.push(findChildrens)
            : null;
        }
        // authorize.push(route)
      }
      authorize.push(generateParent);
    } else {
      if (route.path) {
        /*       let parent = sidebarRoutes.find((sb) => sb.name == exist.page);
        if (parent.childrens) {
          for (let getROutes of parent.childrens) {
          let test =  getParentRoutes(getROutes);
          }
        }
 */
        route.path ? authorize.push(route) : null;
      }
    }

    setAccessRoutes((current) => (current = authorize));
  };

  useEffect(() => {
    if (!faction) return;
    const factionEmblem = faction ? factionsCollections[faction].emblem : "";
    if (sideBarHeaderRef.current)
      sideBarHeaderRef.current.style.backgroundImage = `url(${factionEmblem})`;

    for (const route of sidebarRoutes) {
      checkRoutes(route);
    }
    console.log(accesRoutes);
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
