import React from "react";
import {
  GradPageHeaderRow,
  GradePageContainer,
  MainContainer,
  RowNavBtn,
} from "./grades.styled";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const GradesLayout = () => {
  const location = useLocation();

  return (
    <GradePageContainer>
      <GradPageHeaderRow>
        <RowNavBtn className="bg-header-tabs">
          <NavLink
            className={`nav-tabs-button ${
              location.pathname == "/administrations/grades"
                ? "bg-selected-theme-color"
                : ""
            } `}
            to={"/administrations/grades"}
          >
            Grades
          </NavLink>
          <NavLink
            className={`nav-tabs-button ${
              location.pathname == "/administrations/grades/categories"
                ? "bg-selected-theme-color"
                : ""
            } `}
            to={"/administrations/grades/categories"}
          >
            Categories
          </NavLink>
        </RowNavBtn>
      </GradPageHeaderRow>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </GradePageContainer>
  );
};

export default GradesLayout;
