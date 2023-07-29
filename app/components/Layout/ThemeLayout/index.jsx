import React, { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  ThemeLayoutWrapper,
  ThemeMainLayoutWrapper,
} from "./ThemeLayout.styled";
import Sidebar from "./Navigations/Sidebar";
import Navbar from "./Navigations/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { hydrateUser } from "../../../features/Authenticate/Athenticate.slice";

const ThemeLayout = () => {
  const dispatch = useDispatch();
  const authenticateUser = useSelector((state) => state.AuthenticateReducer);
  const faction = authenticateUser.faction;

  useLayoutEffect(() => {
    dispatch(hydrateUser(usercredential));
    if (!faction) return;
    document.body.classList.add(`theme-${faction}`);
  }, [faction]);

  return (
    <ThemeLayoutWrapper>
      <Sidebar />
      <ThemeMainLayoutWrapper>
        <Navbar />
        <Outlet />
      </ThemeMainLayoutWrapper>
    </ThemeLayoutWrapper>
  );
};

export default ThemeLayout;
