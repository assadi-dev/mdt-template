import React, { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  MainContent,
  ThemeLayoutWrapper,
  ThemeMainLayoutWrapper,
} from "./ThemeLayout.styled";
import Sidebar from "./Navigations/Sidebar";
import Navbar from "./Navigations/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { hydrateUser } from "../../../features/Authenticate/Athenticate.slice";
import { RetrieveAccessByGradeAsync } from "../../../features/UserPermissions/UserPermissionAsync.action";
import { ToastContainer } from "react-toastify";
import { navbarHeight } from "../../../config/stylesValues";

const ThemeLayout = () => {
  const dispatch = useDispatch();
  const authenticateUser = useSelector((state) => state.AuthenticateReducer);
  const faction = authenticateUser.faction;

  useLayoutEffect(() => {
    dispatch(hydrateUser(usercredential));
    dispatch(RetrieveAccessByGradeAsync(usercredential.idGrade));
    if (!faction) return;
    document.body.classList.add(`theme-${faction}`);
  }, [faction]);

  return (
    <ThemeLayoutWrapper>
      <Sidebar />
      <ThemeMainLayoutWrapper>
        <Navbar />
        <MainContent>
          <Outlet />
        </MainContent>
        <ToastContainer
          style={{ marginTop: navbarHeight + 10 }}
          autoClose={3000}
          hideProgressBar={true}
          theme="colored"
        />
      </ThemeMainLayoutWrapper>
    </ThemeLayoutWrapper>
  );
};

export default ThemeLayout;
