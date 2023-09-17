import React from "react";
import { PageContainer } from "../../../../../components/PageContainer";
import {
  CivilSearchInput,
  EncodeCivilBtn,
  GridCivilCard,
  HeaderPage,
} from "./Civils.styled";
import { AiOutlineUserAdd } from "react-icons/ai";
import { createPortal } from "react-dom";
import Modal from "../../../../../components/Modal/Modal";
import View from "./Views";
import useModalState from "../../../../../hooks/useModalState";
import { useCallback } from "react";

const EncodageCivils = () => {
  const { modalState, closeModal, toggleModal } = useModalState();

  return (
    <>
      <PageContainer>
        <HeaderPage>
          <CivilSearchInput className="input-theme-color" />
          <EncodeCivilBtn
            className="bg-btn-alt-theme-color"
            onClick={toggleModal}
          >
            <AiOutlineUserAdd /> Encoder un civil
          </EncodeCivilBtn>
        </HeaderPage>

        <GridCivilCard></GridCivilCard>
      </PageContainer>
      {modalState.isOpen &&
        createPortal(
          <Modal isOpen={modalState.isOpen} onClose={closeModal}>
            {" "}
            <View view={"add-civil"} onCloseModal={closeModal} />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default EncodageCivils;
