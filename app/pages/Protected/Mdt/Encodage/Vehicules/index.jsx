import React from "react";
import { PageContainer } from "../../../../../components/PageContainer";
import { MdOutlineDirectionsCar } from "react-icons/md";
import {
  EncodeVehiculesBtn,
  HeaderPage,
  VehiculesSearchInput,
} from "./Vehicules.styled";

const EncodageVehicules = () => {
  return (
    <>
      <PageContainer>
        <HeaderPage>
          <VehiculesSearchInput className="input-theme-color" />
          <EncodeVehiculesBtn className="bg-btn-alt-theme-color">
            <MdOutlineDirectionsCar />
            Encoder un véhicule
          </EncodeVehiculesBtn>
        </HeaderPage>
      </PageContainer>
    </>
  );
};

export default EncodageVehicules;
