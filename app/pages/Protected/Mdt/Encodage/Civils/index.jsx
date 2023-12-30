import React, { useEffect, useRef, useState } from "react";
import { PageContainer } from "../../../../../components/PageContainer";
import {
  CivilSearchInput,
  EncodeCivilBtn,
  GridCivilCard,
  HeaderPage,
  HeaderRow,
} from "./Civils.styled";
import { AiOutlineUserAdd } from "react-icons/ai";
import { createPortal } from "react-dom";
import Modal from "../../../../../components/Modal/Modal";
import useModalState from "../../../../../hooks/useModalState";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalContent";
import listOfView, { ENCODE_CIVIL } from "./Views/listOfView";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { retrieveAllCivilAsync } from "../../../../../features/Civils/CivilsAsyncAction";
import useDebounce from "../../../../../hooks/useDebounce";
import CivilGridCollection from "./Views/CivilGridCollection";
import PaginateOriginal from "../../../../../components/Pagination/PaginateOriginal";

const EncodageCivils = () => {
  const { modalState, closeModal, toggleModal } = useModalState();
  const handleClickEncodeCivil = () => {
    toggleModal({ view: ENCODE_CIVIL, data: null });
  };

  const dispatch = useDispatch();
  const { collections, status, error, count } = useSelector(
    (state) => state.CivilsReducer
  );

  const promiseRef = useRef(null);
  const [searchCivil, setSearchCivil] = useState("");
  const { debouncedValue } = useDebounce(searchCivil, 500);
  const ITEM_PER_PAGE = 12;

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
    setSearchCivil(value);
  };
  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: ITEM_PER_PAGE, search: debouncedValue },
    };

    promiseRef.current = dispatch(retrieveAllCivilAsync(payload));

    return () => {
      promiseRef.current?.abort();
    };
  }, [pageIndex, debouncedValue, count]);

  return (
    <>
      <PageContainer>
        <HeaderPage>
          <CivilSearchInput
            className="input-theme-color"
            onSearchInput={handeSearchinput}
          />
          <EncodeCivilBtn
            className="bg-btn-alt-theme-color"
            onClick={handleClickEncodeCivil}
          >
            <AiOutlineUserAdd />
            Encoder un civil
          </EncodeCivilBtn>
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

        {status == "complete" ? (
          <CivilGridCollection
            searchCivil={searchCivil}
            collections={collections}
            status={status}
          />
        ) : (
          "Chargement en cours"
        )}
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
