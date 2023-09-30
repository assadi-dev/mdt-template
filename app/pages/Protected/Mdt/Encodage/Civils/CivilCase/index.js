import React from "react";
import {
  CivilCasGridContainer,
  CivilCasePageContainer,
  CivilMainSection,
  RowButtonDocument,
} from "./CivilCase.style";
import AsideBarCivil from "./CivilAsideBar";

import RowheaderButton from "./RowheaderButton";
import CivilTabsHeader from "./CivilTabsCase/CivilTabsHeader";
import { Outlet, useParams } from "react-router-dom";
import { TabsBody } from "./CivilTabsCase/CivilTabs.styled";
import { civilNavigation } from "../../../../../../config/options";

const CivilCase = () => {
  const { idCivil } = useParams();

  return (
    <CivilCasePageContainer>
      <CivilCasGridContainer>
        <AsideBarCivil />
        <CivilMainSection>
          <RowheaderButton />
          <CivilTabsHeader idCivil={idCivil} listeNav={civilNavigation} />
          <TabsBody>
            <Outlet />
          </TabsBody>
        </CivilMainSection>
      </CivilCasGridContainer>
    </CivilCasePageContainer>
  );
};

export default CivilCase;
