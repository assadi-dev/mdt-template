import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { checkRoutes, filtrerEmptyObjets, isAdmin } from "../helper";
import { sidebarRoutes } from "../../../../../../routes/sidebarRoutes";

const useSidebarNav = () => {
  const { faction, roles } = useSelector((state) => state.AuthenticateReducer);
  const { access } = useSelector((state) => state.UserPermissionsReducer);

  const [accesRoutes, setAccessRoutes] = useState([]);
  const [status, setStatus] = useState("pending");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!access) return;

    const adminPage = [...sidebarRoutes].find(
      (sb) => sb.name == "Administrations"
    );

    try {
      setError((current) => (current = ""));
      let mapRoute = [...sidebarRoutes].map((sbr) => checkRoutes(sbr, access));
      mapRoute = filtrerEmptyObjets(mapRoute);
      if (isAdmin()) mapRoute.push(adminPage);

      setAccessRoutes((current) => (current = mapRoute));
      setStatus((current) => (current = "fulfilled"));
    } catch (error) {
      setError((current) => (current = error.message));
      setStatus((current) => (current = "error"));
    }
  }, [access]);

  return {
    accesRoutes,
    error: error,
    status: status,
  };
};

export default useSidebarNav;
