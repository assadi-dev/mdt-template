import React from "react";
import { ButtonDocumentContainer, RowButtonDocument } from "./CivilCase.style";
import {
  HandsCuffsOutline,
  JusticeHamerOutline,
  LockOutline,
  MailConvocIcon,
  PrisonIcon,
  UserLicenceOutline,
  Wantedicon,
} from "../../../../../../components/Svg/MDT.icon";
import ButtonDocument from "./ButtonDocument";

const RowheaderButton = ({ civilData, status }) => {
  const { isWanted, driveLicence, ppa } = civilData;

  return (
    <RowButtonDocument>
      <ButtonDocumentContainer
        className="bg-btn-alt-theme-color"
        label="Convocation"
      >
        <MailConvocIcon />{" "}
      </ButtonDocumentContainer>
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
      <ButtonDocument className="bg-btn-alt-theme-color" label="Rechercher">
        <Wantedicon />
      </ButtonDocument>
    </RowButtonDocument>
  );
};

export default RowheaderButton;
