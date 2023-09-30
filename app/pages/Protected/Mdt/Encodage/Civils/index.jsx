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
import useModalState from "../../../../../hooks/useModalState";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalContent";
import listOfView, { ENCODE_CIVIL } from "./Views/listOfView";
import Cards from "./Cards";

const EncodageCivils = () => {
  const { modalState, closeModal, toggleModal } = useModalState();
  const handleClickEncodeCivil = () => {
    toggleModal({ view: ENCODE_CIVIL, data: null });
  };

  return (
    <>
      <PageContainer>
        <HeaderPage>
          <CivilSearchInput className="input-theme-color" />
          <EncodeCivilBtn
            className="bg-btn-alt-theme-color"
            onClick={handleClickEncodeCivil}
          >
            <AiOutlineUserAdd />
            Encoder un civil
          </EncodeCivilBtn>
        </HeaderPage>

        <GridCivilCard>
          <Cards id={1} />
          <Cards id={1} />
          <Cards id={1} />
          <Cards id={1} />
          <Cards id={1} />
          <Cards id={1} />
          <Cards id={1} />
          <Cards id={1} />
        </GridCivilCard>
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

export default EncodageCivils;
