import React from "react";
import { AsideBarCivilContainer, AsideBarCivilDetail } from "./CivilCase.style";

const AsideBarCivil = ({ civilData, ...props }) => {
  const PhotoCivilLazy = React.lazy(() => import("./PhotoCivil"));
  const CivilDetailLazy = React.lazy(() => import("./CivilDetail"));

  return (
    <AsideBarCivilContainer className="aside-civil-bg">
      <AsideBarCivilDetail>
        <React.Suspense>
          <PhotoCivilLazy gender={civilData.gender} />
        </React.Suspense>
        <React.Suspense>
          <CivilDetailLazy civilData={civilData} />
        </React.Suspense>
      </AsideBarCivilDetail>
    </AsideBarCivilContainer>
  );
};

export default AsideBarCivil;
