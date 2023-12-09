import React, { useEffect } from "react";
import {
  AddBtnRapportRookie,
  RapportRookiePageContainer,
} from "./RapportRookie.styled";
import { RowAction } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ShowRapportRookie from "./ShowRapportRookie";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalFormContent";
import useModalState from "../../../../../hooks/useModalState";
import {
  ADD_RAPPORT_ROOKIE,
  SHOW_RAPPORT_ROOKIE,
  listOfRapporRookieView,
} from "./ModalView/listRapportView";
import { createPortal } from "react-dom";
import { retieaveRookieReportAsync } from "../../../../../features/RookieReport/RookieReportAsynAction";
import { useDispatch, useSelector } from "react-redux";
import { defaultPageSize } from "../../../../../config/constantes";
import useCustomPagination from "../../../../../hooks/useCustomPagination";
import { datetimeFormatFr } from "../../../../../services/utils/dateFormat";

const RapportRookie = () => {
  const { modalState, openModal, closeModal } = useModalState();

  const dispatch = useDispatch();
  const { collections, status, error, count } = useSelector(
    (state) => state.RookieReportReducer
  );
  const {
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
    pageIndex,
    search,
    totalCount,
    pageSize,
  } = useCustomPagination(defaultPageSize, 0, 0, "");

  const handleClickAddbtn = () => {
    openModal({
      view: ADD_RAPPORT_ROOKIE,
    });
  };

  const handlShowRapport = (rapport) => {
    openModal({
      view: SHOW_RAPPORT_ROOKIE,
      data: rapport,
    });
  };

  const COLUMNS = [
    {
      Header: "N° Rapport",
      accessor: "numeroReport",
    },
    {
      Header: "Agent",
      accessor: "agentFullname",
    },

    {
      Header: "Rookie concerné",
      accessor: "rookieFullname",
    },
    {
      Header: "Date et heure",
      accessor: "createdAt",
      Cell: ({ value }) => datetimeFormatFr(value?.date),
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ShowRapportRookie
          rapportRookie={row?.original}
          onShowRapport={handlShowRapport}
        />
      ),
    },
  ];

  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: pageSize, search: search },
    };

    dispatch(retieaveRookieReportAsync(payload));
  }, [pageIndex, count, search]);

  return (
    <>
      <RapportRookiePageContainer>
        <RowAction style={{ height: "100px" }}>
          <div></div>
          <AddBtnRapportRookie
            className="bg-btn-alt-theme-color"
            onClick={handleClickAddbtn}
          >
            Ajouter
          </AddBtnRapportRookie>
        </RowAction>
        <DataTable
          className="table"
          columns={COLUMNS}
          isLoading={status == "pending"}
          isSuccess={status == "complete"}
          data={collections}
          onPageTotalCountChange={onPageTotalCountChange}
          onSearchValue={handleSearch}
          onPageChange={onPageChange}
          initialStatePagination={{
            pageIndex,
            pageSize,
          }}
          totalCount={totalCount}
        />
      </RapportRookiePageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={listOfRapporRookieView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default RapportRookie;
