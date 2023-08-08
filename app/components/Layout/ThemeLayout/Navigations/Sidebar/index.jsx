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

  const accessChildrenToArray = () => {
    let mapping = [...access].map((ac) => {
      if (ac.childrens) {
        if (ac.childrens.includes("/")) {
          let list = ac.childrens.split("/");
          list.map((l) => ({ childrens: l }));
          return { ...ac, childrens: list };
        }
        return { ...ac, childrens: [ac.childrens] };
      } else {
        return ac;
      }
    });

    return mapping;
  };
  const accessMapRoutes = accessChildrenToArray();

  //console.log(accessMapRoutes);
  const getSubPath = (childrens) => {
    if (childrens) {
      // childrens.map(chil=>getSubPath(chil))
      // return getSubPath(childrens.childrens);
    } else {
      let fc = access.find((c) => c.path == childrens.path);
      //console.log(fc);
      // return fc;
    }
  };

  const getParentRoutes = (parent) => {
    console.log(test.find((t) => t[1].name == "MDT"));
    console.log(parent);
  };

  const checkRoutes = (route) => {
    if (route.childrens) {
      let test = route.childrens.map((rc) => checkRoutes(rc));
      return { name: route.name, childrens: test };
    } else {
      if (route.path) {
        let fa = access.find((ra) => ra.path == route.path);
        if (!fa) return [];
        const { isCanAdd, isCanDelete, isCanUpdate } = fa;
        return { ...route, isCanAdd, isCanDelete, isCanUpdate };
      }
    }
  };

  useEffect(() => {
    if (!faction) return;
    const factionEmblem = faction ? factionsCollections[faction].emblem : "";
    if (sideBarHeaderRef.current)
      sideBarHeaderRef.current.style.backgroundImage = `url(${factionEmblem})`;

    const cleanArray = (mf) => {
      if (mf.childrens) {
        return cleanArray(mf.childrens);
      } else {
        return mf.length > 0 || mf.path;
      }
    };
    // console.log(access);
    let mapRoute = [...sidebarRoutes]
      .map((sbr) => checkRoutes(sbr))
      .filter((clean) => cleanArray(clean));

    console.log(mapRoute);

    setAccessRoutes((current) => (current = mapRoute));

    // console.log(accesRoutes);
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
