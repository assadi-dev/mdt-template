import React, { useEffect } from "react";
import { AddBtn, PlaintPageContainer } from "./Plainte.styled";
import {
  ActionButton,
  RowAction,
} from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import Showplainte from "./Showplainte";
import StatePlainte from "./StatePlainte";
import useModalState from "../../../../../hooks/useModalState";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalContent from "../../../../../components/Modal/RenderModalFormContent";
import { createPortal } from "react-dom";
import {
  ADD_PLAINTE,
  ListPlaintModalView,
  SHOW_PLAINTE,
} from "./Modal/ListPlaintModalView";
import { useDispatch, useSelector } from "react-redux";
import { rapportNumberPrefixer } from "../../../../../services/utils/textUtils";
import { retieavePlaintsAsync } from "../../../../../features/Plaints/PaintsAsyncAction";
import useCustomPagination from "../../../../../hooks/useCustomPagination";
import { defaultPageSize } from "../../../../../config/constantes";
import { toastError, toastSuccess } from "../../../../../services/utils/alert";
import { datetimeFormatFr } from "../../../../../services/utils/dateFormat";
import { updatePlaint } from "../../../../../features/Plaints/Plaints.slice";
import { updateSavePlainte } from "./helpers";

const Plainte = () => {
  const { modalState, openModal, closeModal } = useModalState();

  const { collections, status, error, count } = useSelector(
    (state) => state.PlaintsReducer
  );
  const dispatch = useDispatch();
  const {
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
    pageIndex,
    search,
    totalCount,
    pageSize,
  } = useCustomPagination(defaultPageSize, 0, 0, "");

  const showPlainte = (plainte) => {
    openModal({
      view: SHOW_PLAINTE,
      data: plainte,
    });
  };

  const toogleClassifield = async (value) => {
    try {
      const id = value.id;
      const body = { isClassifield: value.isClassifield };
      updateSavePlainte(id, body);
      toastSuccess("Affaire classé");
      dispatch(updatePlaint(value));
    } catch (error) {
      toastError();
    }
  };

  const COLUMNS = [
    {
      Header: "N° Dossier",
      accessor: "id",
      Cell: ({ value }) => rapportNumberPrefixer(value),
    },
    { Header: "Agent", accessor: "agent" },
    { Header: "Dépositaire", accessor: "depository" },
    { Header: "Accusé", accessor: "accused" },
    {
      Header: "Date et Heure",
      accessor: "createdAt",
      Cell: ({ value }) => datetimeFormatFr(value.date),
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <Showplainte
          plainte={row?.original}
          onShowPreviewPlainte={showPlainte}
        />
      ),
    },
    {
      Header: "Affaire classé",
      accessor: "isClassifield",
      Cell: ({ row }) => (
        <StatePlainte
          plainte={row?.original}
          defaultChecked={row?.original?.isClassifield}
          className="toggle-custom"
          onChange={toogleClassifield}
        />
      ),
    },
  ];
  const fetchPromise = React.useRef(null);
  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: pageSize, search: search },
    };

    try {
      fetchPromise.current = dispatch(retieavePlaintsAsync(payload));
      onPageTotalCountChange(count);
    } catch (error) {
      toastError(error.message);
    }

    return () => {
      fetchPromise.current?.abort();
    };
  }, [pageIndex, count, search]);

  const handleClickAddbtn = () => {
    openModal({
      view: ADD_PLAINTE,
    });
  };

  return (
    <>
      <PlaintPageContainer>
        <RowAction style={{ height: "100px" }}>
          <div></div>
          <AddBtn
            className="bg-btn-alt-theme-color"
            onClick={handleClickAddbtn}
          >
            Ajouter
          </AddBtn>
        </RowAction>

        <DataTable
          data={collections}
          className="table"
          columns={COLUMNS}
          isLoading={status == "pending"}
          isSuccess={status == "complete"}
          onPageTotalCountChange={onPageTotalCountChange}
          onSearchValue={handleSearch}
          onPageChange={onPageChange}
          initialStatePagination={{
            pageIndex,
            pageSize,
          }}
          totalCount={totalCount}
        />
      </PlaintPageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={ListPlaintModalView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default Plainte;
