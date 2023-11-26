import React from "react";
import useProcess from "../../../../../../../hooks/useProcess";

import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../../components/Forms/FormView.styled";

import VehicleEncodingForm from "./VehicleEncodingForm";

const EncodeFormVehicule = ({ onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();

  const submitFormArme = (values) => {
    try {
      toggleProcess();
      console.log(values);
    } catch (error) {
    } finally {
      toggleProcess();
    }
  };

  return (
    <>
      <ModalFormContainer {...props}>
        <HeaderModal>
          <h2 className="form-title">Encoder un véhicule </h2>
          <CloseModalBtn className="close-section" onClick={onCloseModal} />
        </HeaderModal>
        <VehicleEncodingForm process={process} submitForm={submitFormArme} />
      </ModalFormContainer>
    </>
  );
};

export default EncodeFormVehicule;
