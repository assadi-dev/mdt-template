import React from "react";
import { PageContainer } from "../../../../../components/PageContainer";
import {
  ArmesSearchInput,
  EncodeArmesBtn,
  GridArmesCard,
  HeaderPage,
} from "./Armes.styled";
import { GiPistolGun } from "react-icons/gi";
import Modal from "../../../../../components/Modal/Modal";
import useModalState from "../../../../../hooks/useModalState";
import listOfView, { ENCODE_ARMES } from "./View/listsOfView";
import { createPortal } from "react-dom";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalContent";

const EncodageArmes = () => {
  const { modalState, toggleModal, closeModal } = useModalState();
  const handleClickEncodeArme = () =>
    toggleModal({
      view: ENCODE_ARMES,
      data: null,
    });

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
        <GridArmesCard></GridArmesCard>
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

export default EncodageArmes;
