import React, { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  ThemeLayoutWrapper,
  ThemeMainLayoutWrapper,
} from "./ThemeLayout.styled";
import Sidebar from "./Navigations/Sidebar";
import Navbar from "./Navigations/Navbar";
import { useDispatch } from "react-redux";
import { hydrateUser } from "../../../features/Authenticate/Athenticate.slice";

const ThemeLayout = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(hydrateUser(usercredential));
  }, []);

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
