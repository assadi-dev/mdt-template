import styled from "styled-components";
import { navbarHeight, sidebarSize } from "../../../config/stylesValues";

export const ThemeLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: ${sidebarSize}px 1fr;
  grid-template-areas: ". main";
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const SidebarWrapper = styled.div`
  width: ${sidebarSize}px;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: var(--background-color-dark);
  box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.5);
`;

export const ThemeMainLayoutWrapper = styled.div`
  grid-area: main;
  display: grid;
  grid-gap: 1.2rem;

  @media screen and (min-width: 992px) {
    grid-template-rows: ${navbarHeight + 20}px 1fr;
  }
`;
