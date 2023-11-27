import React from "react";
import { CivilDetailLoaderContainer } from "../CivilCase.style";
import SpinnerLoading from "../../../../../../../components/Shared/Loading/SpinnerLoading";

const CivilDetailLoader = () => {
  return (
    <CivilDetailLoaderContainer>
      <SpinnerLoading />
    </CivilDetailLoaderContainer>
  );
};

export default CivilDetailLoader;
