import React from "react";
import PhotoCivil from "./PhotoCivil";
import { AsideBarCivilContainer, AsideBarCivilDetail } from "./CivilCase.style";
import CivilDetail from "./CivilDetail";

const AsideBarCivil = ({ ...props }) => {
  const civilData = {
    firstname: "Prénom",
    lastname: "nom",
    birth: "08-09-2023",
    address: "Hotel près de PillBox",
    phone: "555-7333869",
    apartenance: "Usain Block",
    job: "Livreur",
    hairColor: "Rouge",
    nationality: "Française",
    ethni: "Caucasien",
    gender: "Homme",
  };

  return (
    <AsideBarCivilContainer className="aside-civil-bg">
      <AsideBarCivilDetail>
        <PhotoCivil gender={"male"} />
        <CivilDetail civilData={civilData} />
      </AsideBarCivilDetail>
    </AsideBarCivilContainer>
  );
};

export default AsideBarCivil;
