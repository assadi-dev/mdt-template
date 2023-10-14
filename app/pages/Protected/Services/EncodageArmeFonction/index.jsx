import React from "react";
import { PageContainer } from "../../../../components/PageContainer";
import { GiPistolGun } from "react-icons/gi";
import Modal from "../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../components/Modal/RenderModalContent";
import useModalState from "../../../../hooks/useModalState";
import listOfView, { ENCODE_ARME_SERVICE } from "./View/listOfView";
import {
  ArmesSearchInput,
  EncodeArmesBtn,
  HeaderPage,
} from "./EncodageArmeFonction.styled";
import { createPortal } from "react-dom";
import { GridArmesCard } from "../../Mdt/Encodage/Armes/Armes.styled";
import CardArmes from "../../Mdt/Encodage/Armes/cardArmes";

const EncodageArmeFonction = () => {
  const { modalState, closeModal, toggleModal } = useModalState();
  const handleClickEncodeArme = () => {
    toggleModal({ view: ENCODE_ARME_SERVICE, data: null });
  };

  return (
    <>
      <PageContainer>
        <HeaderPage>
          <ArmesSearchInput className="input-theme-color" />
          <EncodeArmesBtn
            className="bg-btn-alt-theme-color"
            onClick={handleClickEncodeArme}
          >
            <GiPistolGun />
            Encoder une arme
          </EncodeArmesBtn>
        </HeaderPage>
        <GridArmesCard>
          <CardArmes />
          <CardArmes />
          <CardArmes />
          <CardArmes />
          <CardArmes />
          <CardArmes />
          <CardArmes />
          <CardArmes />
        </GridArmesCard>
      </PageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen} onClose={closeModal}>
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

export default EncodageArmeFonction;
