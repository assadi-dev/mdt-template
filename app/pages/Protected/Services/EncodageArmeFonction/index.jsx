import React, { useEffect, useState } from "react";
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
  PaginatRow,
} from "./EncodageArmeFonction.styled";
import { createPortal } from "react-dom";
import { GridArmesCard } from "../../Mdt/Encodage/Armes/Armes.styled";
import CardArmes from "../../Mdt/Encodage/Armes/cardArmes";
import { useDispatch, useSelector } from "react-redux";
import { toastError } from "../../../../services/utils/alert";
import useDebounce from "../../../../hooks/useDebounce";
import GridWeaponCard from "./View/GridWeaponCard";
import PaginateOriginal from "../../../../components/Pagination/PaginateOriginal";
import { retieaveServiceWeaponEncodingAsync } from "../../../../features/ServiceWeaponEncoding/ServiceWeaponEncodingAsyncAction";
import { postServiceWeaponEncoding } from "./helpers";

const EncodageArmeFonction = () => {
  const { modalState, closeModal, toggleModal } = useModalState();

  const dispatch = useDispatch();
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );
  const { collections, status, count } = useSelector(
    (state) => state.ServiceWeaponEncodingReducer
  );

  const [searchWeapon, setSearchWeapon] = useState("");
  const { debouncedValue } = useDebounce(searchWeapon, 500);
  const ITEM_PER_PAGE = 10;

  const handeSearchinput = (value) => {
    setSearchWeapon(value);
  };
  const [pageIndex, setPageIndex] = useState(1);
  const MAX_PAGE = Math.ceil(count / ITEM_PER_PAGE);

  const handleSetPage = (increment) => {
    setPageIndex((current) => (current += increment));
  };

  const handleClickEncodeArme = () => {
    toggleModal({
      view: ENCODE_ARME_SERVICE,
      data: { idAgent, lastname, firstname, matricule },
    });
  };

  useEffect(() => {
    try {
      const payload = {
        page: pageIndex,
        params: { item_per_page: ITEM_PER_PAGE, search: debouncedValue },
      };

      dispatch(retieaveServiceWeaponEncodingAsync(payload));
    } catch (error) {
      toastError();
    }
  }, [pageIndex, debouncedValue]);

  return (
    <>
      <PageContainer>
        <HeaderPage>
          <ArmesSearchInput
            className="input-theme-color"
            onSearchInput={handeSearchinput}
          />
          <EncodeArmesBtn
            className="bg-btn-alt-theme-color"
            onClick={handleClickEncodeArme}
          >
            <GiPistolGun />
            Encoder une arme
          </EncodeArmesBtn>
        </HeaderPage>
        <PaginatRow>
          <PaginateOriginal
            maxPage={MAX_PAGE}
            onPrev={() => handleSetPage(-1)}
            onNext={() => handleSetPage(1)}
          />
        </PaginatRow>
        <GridWeaponCard collections={collections} />
      </PageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen} onClose={closeModal}>
          <RenderModalFormContent
            view={modalState.view}
            enumOfView={listOfView}
            onCloseModal={closeModal}
            payload={modalState.data}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default EncodageArmeFonction;
