import React from "react";
import {
  CivilCasGridContainer,
  CivilCasePageContainer,
  CivilMainSection,
  RowButtonDocument,
} from "./CivilCase.style";
import AsideBarCivil from "./CivilAsideBar";
import ButtonDocument from "./ButtonDocument";
import { MailConvocIcon } from "../../../../../../components/Svg/MDT.icon";

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
          </RowButtonDocument>
        </CivilMainSection>
      </CivilCasGridContainer>
    </CivilCasePageContainer>
  );
};

export default CivilCase;
