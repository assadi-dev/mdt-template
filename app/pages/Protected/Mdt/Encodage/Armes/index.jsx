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
import View from "./View";
import useModalState from "../../../../../hooks/useModalState";
import { ENCODE_ARMES } from "./View/listsOfView";

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
      <Modal isOpen={modalState.isOpen} onClose={closeModal}>
        <View view={modalState.view} onCloseModal={closeModal} />
      </Modal>
    </>
  );
};

export default EncodageArmes;
