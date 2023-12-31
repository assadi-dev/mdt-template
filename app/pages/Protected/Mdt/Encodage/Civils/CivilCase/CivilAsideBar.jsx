import React from "react";
import { AsideBarCivilContainer, AsideBarCivilDetail } from "./CivilCase.style";
import CivilDetail from "./CivilDetail";
import PhotoCivil from "./PhotoCivil";

const AsideBarCivil = ({ civilData, ...props }) => {
  return (
    <AsideBarCivilContainer className="aside-civil-bg">
      <AsideBarCivilDetail>
        <PhotoCivil gender={civilData.gender} />

        <CivilDetail civilData={civilData} />
      </AsideBarCivilDetail>
    </AsideBarCivilContainer>
  );
};

export default AsideBarCivil;
