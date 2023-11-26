import React, { useEffect, useRef, useState } from "react";
import { PageContainer } from "../../../../../components/PageContainer";
import {
  ArmesSearchInput,
  EncodeArmesBtn,
  GridArmesCard,
  HeaderPage,
  HeaderRow,
} from "./Armes.styled";
import { GiPistolGun } from "react-icons/gi";
import Modal from "../../../../../components/Modal/Modal";
import useModalState from "../../../../../hooks/useModalState";
import listOfView, { ENCODE_ARMES } from "./View/listsOfView";
import { createPortal } from "react-dom";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalContent";
import CardArmes from "./cardArmes";
import { useDispatch, useSelector } from "react-redux";
import { retieaveWeaponEncodingAsync } from "../../../../../features/WeaponEncoding/WeaponAsyncAction";
import useDebounce from "../../../../../hooks/useDebounce";
import WeaponEncodingGrid from "./View/WeaponEncodingGrid";
import PaginateOriginal from "../../../../../components/Pagination/PaginateOriginal";

const EncodageArmes = () => {
  const { modalState, toggleModal, closeModal } = useModalState();
  const handleClickEncodeArme = () =>
    toggleModal({
      view: ENCODE_ARMES,
      data: null,
    });
  const { collections, error, count, status } = useSelector(
    (state) => state.WeaponEncodingReducer
  );
  const dispatch = useDispatch();

  const promiseRef = useRef(null);
  const [searchWeapon, setSearchWeapon] = useState("");
  const { debouncedValue } = useDebounce(searchWeapon, 500);
  const ITEM_PER_PAGE = 10;

  const [pageIndex, setPageIndex] = useState(1);
  const MAX_PAGE = Math.ceil(count / ITEM_PER_PAGE);

  const handleSetPage = (increment) => {
    setPageIndex((current) => (current += increment));
  };
  const handleSetFirst = () => {
    setPageIndex((current) => 1);
  };
  const handleSetLast = () => {
    setPageIndex((current) => MAX_PAGE);
  };

  const handeSearchinput = (value) => {
    setSearchWeapon(value);
  };

  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: ITEM_PER_PAGE, search: debouncedValue },
    };

    promiseRef.current = dispatch(retieaveWeaponEncodingAsync(payload));

    return () => {
      promiseRef.current?.abort();
    };
  }, [pageIndex, debouncedValue, count]);

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
        <HeaderRow>
          <div></div>
          <PaginateOriginal
            onStart={handleSetFirst}
            onNext={() => handleSetPage(1)}
            onPrev={() => handleSetPage(-1)}
            OnEnd={handleSetLast}
            pageIndex={pageIndex}
            maxPage={MAX_PAGE}
          />
        </HeaderRow>
        {status == "pending" ? (
          "chargement en cours"
        ) : (
          <WeaponEncodingGrid
            collections={collections}
            searchValue={debouncedValue}
            status={status}
          />
        )}
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
