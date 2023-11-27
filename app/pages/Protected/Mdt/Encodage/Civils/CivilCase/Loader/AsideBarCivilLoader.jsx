import React from "react";
import {
  AsideBarCivilContainer,
  AsideBarCivilDetail,
} from "../CivilCase.style";
import PhotoCivilLoader from "./PhotoCivilLoader";
import CivilDetailLoader from "./CivilDetailLoader";

const AsideBarCivilLoader = () => {
  return (
    <AsideBarCivilContainer className="aside-civil-bg">
      <AsideBarCivilDetail>
        <PhotoCivilLoader />
      </AsideBarCivilDetail>
      <CivilDetailLoader />
    </AsideBarCivilContainer>
  );
};

export default AsideBarCivilLoader;
