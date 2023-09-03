import styled from "styled-components";
import { factionsCollections } from "../../../../../config/factions";

const url = factionsCollections["lspd"].emblem;

export const SidebarHeader = styled.div`
  width: 100%;
  height: 100px;
  margin: 22px 0;
  /*background-image: url(${url});*/
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const SibarListCOntainer = styled.ul`
  padding: 18px 10px;
  padding-left: 15px;
  height: 83vh;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 1.38rem;
  .sidebar-selected {
    padding: 0.6rem 0.8rem;
    font-size: 1.42rem;
  }
`;

export const SideBarItemsContainer = styled.div`
  margin-bottom: 1rem;
  min-height: 25px;
  width: 100%;
  font-size: 1rem;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9);
`;

export const SibartItemRow = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 0 0.8rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 1.2rem;
  letter-spacing: 0.6px;

  cursor: pointer;
  a {
    display: block;
    width: 100%;

    border-radius: 5px;
  }
`;

export const DropDownSubItemsList = styled.ul`
  background-color: rgba(0, 0, 0, 0.25);
  color: #fff;
  padding: 0.9rem;
  margin: 0.5rem 0 0.8rem 0;
  width: 100%;
  min-height: 25px;
  border-radius: 5px;
  font-size: 1.16rem;
  li {
    margin-bottom: 0;
    padding: 0.6rem 0.8rem;
  }
`;
