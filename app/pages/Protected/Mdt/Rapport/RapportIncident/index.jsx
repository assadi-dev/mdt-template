import React, { useEffect } from "react";

import { ActionButton } from "../../../../../components/DataTable/DataTable.styled";
import { RowAction } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ActionCells from "../../../../../components/DataTable/ActionCells";
import ShowRapportIncident from "./ShowRapportIncident";
import {
  ADD_RAPPORT_INCIDENT,
  DELETE_RAPPORT_INCIDENT,
  EDIT_RAPPORT_INCIDENT,
  SHOW_RAPPORT_INCIDENT,
  listOfRapportIncidentView,
} from "./ModalView/listOfRapportIncidentView";
import { createPortal } from "react-dom";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalFormContent";
import useModalState from "../../../../../hooks/useModalState";
import {
  AddBtnRapportIncident,
  RapportIncidentPageContainer,
} from "./Rapportincident.styled";
import { retrieveIncidentActionAsync } from "../../../../../features/IncidentReport/IncidentAsyncAction";
import useCustomPagination from "../../../../../hooks/useCustomPagination";
import { defaultPageSize } from "../../../../../config/constantes";
import { useDispatch, useSelector } from "react-redux";
import { datetimeFormatFr } from "../../../../../services/utils/dateFormat";

const RapportIncident = () => {
  const { modalState, openModal, closeModal } = useModalState();

  const { collections, status, error, count } = useSelector(
    (state) => state.IncidentReportReducer
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

  const handleClickShowBtn = (rapportIncident) => {
    openModal({
      view: SHOW_RAPPORT_INCIDENT,
      data: rapportIncident,
    });
  };
  const handleClickAddBtn = () => {
    openModal({
      view: ADD_RAPPORT_INCIDENT,
    });
  };
  const handleClickEditBtn = (rapportIncident) => {
    openModal({
      view: EDIT_RAPPORT_INCIDENT,
      data: rapportIncident,
    });
  };
  const handleClickDeleteBtn = (rapportIncident) => {
    openModal({
      view: DELETE_RAPPORT_INCIDENT,
      data: rapportIncident,
    });
  };

  const COLUMNS = [
    {
      Header: "N° de rapport",
      accessor: "numeroReport",
    },
    {
      Header: "Agent",
      accessor: "agent",
    },
    {
      Header: "Date et heure de l'incident",
      accessor: "createdAt",
      Cell: ({ value }) => datetimeFormatFr(value.date),
    },

    {
      Header: "Rapport",
      accessor: "raport",
      Cell: ({ row }) => (
        <ShowRapportIncident
          rapportIncident={row.original}
          onShowRapport={handleClickShowBtn}
        />
      ),
    },
    {
      Header: "Actions",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original.id}
          canDelete={true}
          canEdit={true}
          onEdit={() => handleClickEditBtn(row.original)}
          onDelete={() => handleClickDeleteBtn(row.original)}
        />
      ),
    },
  ];
  const fetchPromise = React.useRef(null);
  useEffect(() => {
    try {
      const payload = {
        page: pageIndex,
        params: { item_per_page: pageSize, search: search },
      };

      fetchPromise.current = dispatch(retrieveIncidentActionAsync(payload));
      onPageTotalCountChange(count);
    } catch (error) {}

    return () => {
      fetchPromise.current?.abort();
    };
  }, [count, pageIndex, search]);

  return (
    <>
      <RapportIncidentPageContainer>
        <RowAction style={{ height: "100px" }}>
          <div></div>
          <AddBtnRapportIncident
            className="bg-btn-alt-theme-color"
            onClick={handleClickAddBtn}
          >
            Ajouter
          </AddBtnRapportIncident>
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
      </RapportIncidentPageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={listOfRapportIncidentView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default RapportIncident;
