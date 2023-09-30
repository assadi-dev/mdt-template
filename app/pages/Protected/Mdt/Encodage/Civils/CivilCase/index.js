import React from "react";
import {
  CivilCasGridContainer,
  CivilCasePageContainer,
  CivilMainSection,
  RowButtonDocument,
} from "./CivilCase.style";
import AsideBarCivil from "./CivilAsideBar";
import ButtonDocument from "./ButtonDocument";
import {
  HandsCuffsOutline,
  JusticeHamerOutline,
  LockOutline,
  MailConvocIcon,
  PrisonIcon,
  UserLicenceOutline,
  Wantedicon,
} from "../../../../../../components/Svg/MDT.icon";

const CivilCase = () => {
  return (
    <CivilCasePageContainer>
      <CivilCasGridContainer>
        <AsideBarCivil />
        <CivilMainSection>
          <RowButtonDocument>
            <ButtonDocument
              className="bg-btn-alt-theme-color"
              label="Convocation"
            >
              <MailConvocIcon />{" "}
            </ButtonDocument>
            <ButtonDocument className="bg-btn-alt-theme-color" label="Prison">
              <LockOutline />
            </ButtonDocument>
            <ButtonDocument className="bg-btn-alt-theme-color" label="Permis">
              <UserLicenceOutline />
            </ButtonDocument>
            <ButtonDocument className="bg-btn-alt-theme-color" label="Bracelet">
              <HandsCuffsOutline />
            </ButtonDocument>
            <ButtonDocument className="bg-btn-alt-theme-color" label="Mandat">
              <JusticeHamerOutline />
            </ButtonDocument>
            <ButtonDocument className="bg-btn-alt-theme-color" label="Cellule">
              <PrisonIcon />
            </ButtonDocument>
            <ButtonDocument
              className="bg-btn-alt-theme-color"
              label="Rechercher"
            >
              <Wantedicon />
            </ButtonDocument>
          </RowButtonDocument>
        </CivilMainSection>
      </CivilCasGridContainer>
    </CivilCasePageContainer>
  );
};

export default CivilCase;
