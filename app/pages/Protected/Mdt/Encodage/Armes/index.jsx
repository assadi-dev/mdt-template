import React from "react";
import { PageContainer } from "../../../../../components/PageContainer";
import {
  ArmesSearchInput,
  EncodeArmesBtn,
  GridArmesCard,
  HeaderPage,
} from "./Armes.styled";
import { GiPistolGun } from "react-icons/gi";

const EncodageArmes = () => {
  return (
    <>
      <PageContainer>
        <HeaderPage>
          <ArmesSearchInput className="input-theme-color" />
          <EncodeArmesBtn className="bg-btn-alt-theme-color">
            <GiPistolGun />
            Encoder une arme
          </EncodeArmesBtn>
        </HeaderPage>
        <GridArmesCard></GridArmesCard>
      </PageContainer>
    </>
  );
};

export default EncodageArmes;
