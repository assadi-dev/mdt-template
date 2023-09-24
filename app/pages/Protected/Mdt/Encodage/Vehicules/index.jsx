import React from "react";
import { PageContainer } from "../../../../../components/PageContainer";
import { MdOutlineDirectionsCar } from "react-icons/md";
import {
  EncodeVehiculesBtn,
  HeaderPage,
  VehiculesSearchInput,
} from "./Vehicules.styled";
import ViewModalContent from "../../../../../components/Modal/ViewModalContent";
import { createPortal } from "react-dom";
import Modal from "../../../../../components/Modal/Modal";
import useProcess from "../../../../../hooks/useProcess";
import useModalState from "../../../../../hooks/useModalState";
import listOfView, { ENCODE_VEHICULE } from "./View/listOfView";

const EncodageVehicules = () => {
  const { process, toggleProcess } = useProcess();
  const { modalState, toggleModal, closeModal } = useModalState();

  const handleClicEncodeVehicule = () => {
    toggleModal({ view: ENCODE_VEHICULE, data: null });
  };

  return (
    <>
      <PageContainer>
        <HeaderPage>
          <VehiculesSearchInput className="input-theme-color" />
          <EncodeVehiculesBtn
            className="bg-btn-alt-theme-color"
            onClick={handleClicEncodeVehicule}
          >
            <MdOutlineDirectionsCar />
            Encoder un véhicule
          </EncodeVehiculesBtn>
        </HeaderPage>
      </PageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <ViewModalContent
            view={modalState.view}
            enumOfView={listOfView}
            onCloseModal={closeModal}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default EncodageVehicules;
