import React from "react";
import {
  GradPageHeaderRow,
  GradePageContainer,
  RowNavBtn,
} from "./grades.styled";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const GradesLayout = () => {
  const location = useLocation();

  return (
    <GradePageContainer>
      <GradPageHeaderRow>
        <RowNavBtn>
          <NavLink
            className={`nav-tabs-button ${
              location.pathname == "/administrations/grades"
                ? "bg-btn-theme-color"
                : ""
            } `}
            to={"/administrations/grades"}
          >
            Grades
          </NavLink>
          <NavLink
            className={`nav-tabs-button ${
              location.pathname == "/administrations/grades/categories"
                ? "bg-btn-theme-color"
                : ""
            } `}
            to={"/administrations/grades/categories"}
          >
            Categories
          </NavLink>
        </RowNavBtn>
      </GradPageHeaderRow>
      <Outlet />
    </GradePageContainer>
  );
};

export default GradesLayout;
