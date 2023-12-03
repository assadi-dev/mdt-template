import React, { useEffect, useRef } from "react";
import {
  AddBtnRapporIncident,
  AddBtnRapporIntervention,
  RapportInterventionPageContainer,
} from "./RapportIntervention.styled";
import { RowAction } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ShowRapportIntervention from "./ShowRapportIntervention";
import ActionCells from "../../../../../components/DataTable/ActionCells";
import { createPortal } from "react-dom";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalContent";
import useModalState from "../../../../../hooks/useModalState";
import {
  ADD_RAPPORT_INTERVENTION,
  DELETE_RAPPORT_INTERVENTION,
  EDIT_RAPPORT_INTERVENTION,
  SHOW_RAPPORT_INTERVENTION,
  listOfRapportInterventionView,
} from "./ModalView/listOfRapportInterventionView";
import { datetimeFormatFr } from "../../../../../services/utils/dateFormat";
import useCustomPagination from "../../../../../hooks/useCustomPagination";
import { useDispatch, useSelector } from "react-redux";
import { defaultPageSize } from "../../../../../config/constantes";
import { retrieveInterventionActionAsync } from "../../../../../features/interventionReport/interventionReportAsyncAction";

const RapportIntervention = () => {
  const { modalState, openModal, closeModal } = useModalState();

  const { collections, status, error, count } = useSelector(
    (state) => state.InterventionReportReducer
  );

  const dispatch = useDispatch();

  const fetchPromise = useRef();

  const {
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
    pageIndex,
    search,
    totalCount,
    pageSize,
  } = useCustomPagination(defaultPageSize, 0, 0, "");

  const COLUMNS = [
    {
      Header: "N° du rapport",
      accessor: "numeroReport",
    },
    {
      Header: "Agent",
      accessor: "agent",
    },
    {
      Header: "Date et heure d'intervention",
      accessor: "createdAt",
      Cell: ({ value }) => (value?.date ? datetimeFormatFr(value?.date) : ""),
    },

    {
      Header: "Rapport",
      accessor: "",
      Cell: ({ row }) => (
        <ShowRapportIntervention
          raaportIntervention={row.original}
          onShowRappprt={handleClickShowBtn}
        />
      ),
    },
    {
      Header: "Actions",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          canDelete={true}
          canEdit={true}
          onEdit={() => handleClickEditBtn(row.original)}
          onDelete={() => handleClickDeleteBtn(row.original)}
        />
      ),
    },
  ];

  const handleClickShowBtn = (rapportIncident) => {
    openModal({
      view: SHOW_RAPPORT_INTERVENTION,
      data: rapportIncident,
    });
  };

  const handleClickAddbtn = () => {
    openModal({
      view: ADD_RAPPORT_INTERVENTION,
    });
  };
  const handleClickEditBtn = (rapportIntervention) => {
    openModal({
      view: EDIT_RAPPORT_INTERVENTION,
      data: rapportIntervention,
    });
  };
  const handleClickDeleteBtn = (rapportIntervention) => {
    openModal({
      view: DELETE_RAPPORT_INTERVENTION,
      data: rapportIntervention,
    });
  };

  useEffect(() => {
    try {
      const payload = {
        page: pageIndex,
        params: { item_per_page: pageSize, search: search },
      };

      fetchPromise.current = dispatch(retrieveInterventionActionAsync(payload));
      onPageTotalCountChange(count);

      return () => {
        fetchPromise.current?.abort();
      };
    } catch (error) {}
  }, [pageIndex, count, search]);

  return (
    <RapportInterventionPageContainer>
      <RowAction style={{ height: "100px" }}>
        <div></div>
        <AddBtnRapporIntervention
          className="bg-btn-alt-theme-color"
          onClick={handleClickAddbtn}
        >
          Ajouter
        </AddBtnRapporIntervention>
      </RowAction>
      <DataTable
        className="table"
        columns={COLUMNS}
        data={collections}
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

      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={listOfRapportInterventionView}
          />
        </Modal>,
        document.body
      )}
    </RapportInterventionPageContainer>
  );
};

export default RapportIntervention;
