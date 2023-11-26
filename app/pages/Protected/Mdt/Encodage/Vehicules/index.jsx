import React, { useEffect, useRef, useState } from "react";
import { PageContainer } from "../../../../../components/PageContainer";
import { MdOutlineDirectionsCar } from "react-icons/md";
import {
  EncodeVehiculesBtn,
  GridVehiculesCard,
  HeaderPage,
  HeaderRow,
  VehiculesSearchInput,
} from "./Vehicules.styled";
import { createPortal } from "react-dom";
import Modal from "../../../../../components/Modal/Modal";
import useProcess from "../../../../../hooks/useProcess";
import useModalState from "../../../../../hooks/useModalState";
import listOfView, { ENCODE_VEHICULE } from "./View/listOfView";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalContent";
import CardVehicule from "./CardVehicule";
import VehicleEncodigGrid from "./View/VehicleEncodingGrid";
import PaginateOriginal from "../../../../../components/Pagination/PaginateOriginal";
import useDebounce from "../../../../../hooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import VehicleEncodingGrid from "./View/VehicleEncodingGrid";
import { fetchVehicleCivilCollectionAsync } from "../../../../../features/VehicleEncoding/VehicleEncodingAsyncAction";

const EncodageVehicules = () => {
  const { process, toggleProcess } = useProcess();
  const { modalState, toggleModal, closeModal } = useModalState();

  const handleClicEncodeVehicule = () => {
    toggleModal({ view: ENCODE_VEHICULE, data: null });
  };

  const { collections, error, count, status } = useSelector(
    (state) => state.VehicleEncodingReducer
  );
  const dispatch = useDispatch();

  const promiseRef = useRef(null);
  const [searchVehicle, setSearchVehicle] = useState("");
  const { debouncedValue } = useDebounce(searchVehicle, 500);
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

  const handleSearchinput = (value) => {
    setSearchVehicle(value);
  };

  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: ITEM_PER_PAGE, search: debouncedValue },
    };

    promiseRef.current = dispatch(fetchVehicleCivilCollectionAsync(payload));

    return () => {
      // promiseRef.current?.abort();
    };
  }, [pageIndex, debouncedValue, count]);

  return (
    <>
      <PageContainer>
        <HeaderPage>
          <VehiculesSearchInput
            className="input-theme-color"
            onSearchInput={handleSearchinput}
          />
          <EncodeVehiculesBtn
            className="bg-btn-alt-theme-color"
            onClick={handleClicEncodeVehicule}
          >
            <MdOutlineDirectionsCar />
            Encoder un véhicule
          </EncodeVehiculesBtn>
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
          <VehicleEncodingGrid
            collections={collections}
            status={status}
            searchValue={debouncedValue}
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

export default EncodageVehicules;
