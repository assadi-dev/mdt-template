import React from "react";
import { PageContainer } from "../../../../../components/PageContainer";
import { MdOutlineDirectionsCar } from "react-icons/md";
import {
  EncodeVehiculesBtn,
  GridVehiculesCard,
  HeaderPage,
  VehiculesSearchInput,
} from "./Vehicules.styled";
import { createPortal } from "react-dom";
import Modal from "../../../../../components/Modal/Modal";
import useProcess from "../../../../../hooks/useProcess";
import useModalState from "../../../../../hooks/useModalState";
import listOfView, { ENCODE_VEHICULE } from "./View/listOfView";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalContent";
import CardVehicule from "./CardVehicule";

const EncodageVehicules = () => {
  const { process, toggleProcess } = useProcess();
  const { modalState, toggleModal, closeModal } = useModalState();

  const handleClicEncodeVehicule = () => {
    toggleModal({ view: ENCODE_VEHICULE, data: null });
  };

  const vehiculeData = {
    plaque: "123456",
    type: "Buffalo",
    lastname: "Nom",
    firstname: "Prénom",
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
        <GridVehiculesCard>
          <CardVehicule vehiculeData={vehiculeData} />
          <CardVehicule vehiculeData={vehiculeData} />
          <CardVehicule vehiculeData={vehiculeData} />
          <CardVehicule vehiculeData={vehiculeData} />
          <CardVehicule vehiculeData={vehiculeData} />
          <CardVehicule vehiculeData={vehiculeData} />
        </GridVehiculesCard>
      </PageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
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
