import React from "react";
import {
  GradPageHeaderRow,
  GradePageContainer,
  MainContainer,
  RowNavBtn,
} from "../../Grades/grades.styled";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const GestionGrades = () => {
  const locaation = useLocation();

  return (
    <GradePageContainer>
      <GradPageHeaderRow>
        <RowNavBtn className="bg-header-tabs">
          <NavLink
            className={`nav-tabs-button ${
              location.pathname ==
              "/gestion-des-ressources/gestion-grade/grades"
                ? "bg-selected-theme-color"
                : ""
            } `}
            to={"/gestion-des-ressources/gestion-grade/grades"}
          >
            Grades
          </NavLink>
          <NavLink
            className={`nav-tabs-button ${
              location.pathname ==
              "/gestion-des-ressources/gestion-grade/categories"
                ? "bg-selected-theme-color"
                : ""
            } `}
            to={"/gestion-des-ressources/gestion-grade/categories"}
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

export default GestionGrades;
