import React, { useEffect, useRef } from "react";
import {
  AddSanctionBtn,
  AttributionSanctionPageContainer,
} from "./AttributionSanction.styled";
import { RowAction } from "../../../../../components/PageContainer";
import useDelayed from "../../../../../hooks/useDelayed";
import useLoader from "../../../../../hooks/useLoader";
import DataTable from "../../../../../components/DataTable";
import ActionCells from "../../../../../components/DataTable/ActionCells";
import ShowSanction from "./ShowSanction";
import useModalState from "../../../../../hooks/useModalState";
import {
  ADD_ATTRIBUTION_SANCTION,
  DELETE_ATTRIBUTION_SANCTION,
  EDIT_ATTRIBUTION_SANCTION,
  SHOW_ATTRIBUTION_SANCTION,
  listOfViewSanction,
} from "./Views/listOfViews";
import { createPortal } from "react-dom";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalFormContent";
import { useSelector, useDispatch } from "react-redux";
import { retrieveSanctionsAsync } from "../../../../../features/Sanctions/SanctionAsynAction";
import { defaultPageSize } from "../../../../../config/constantes";
import useCustomPagination from "../../../../../hooks/useCustomPagination";
import { datetimeFormatFr } from "../../../../../services/utils/dateFormat";

const AttributionSanctions = () => {
  const { endLoader, loaderState } = useLoader();
  useDelayed(endLoader, 1000);

  const { collections, status, count, error } = useSelector(
    (state) => state.SanctionReducer
  );

  const dispatch = useDispatch();

  const { modalState, openModal, closeModal } = useModalState();

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
      Header: "Date",
      Cell: ({ row }) => {
        const createdAt = row.original.createdAt;
        return datetimeFormatFr(createdAt?.date);
      },
    },
    {
      Header: "Agent Concerné",
      accessor: "agentConcerned",
    },
    {
      Header: "Decideur(s)",
      accessor: "decisionMaker",
    },
    {
      Header: "Raison",
      accessor: "",
      Cell: ({ row }) => (
        <ShowSanction
          className="bg-show-btn"
          sanctionData={row.original}
          onShowSanction={handleClikShowSanction}
        />
      ),
    },

    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          canEdit={true}
          canDelete={true}
          onEdit={handleClikEditSanction}
          onDelete={handleClikDeletSanction}
        />
      ),
    },
  ];

  const handleClikShowSanction = (sanctionData) => {
    openModal({
      view: SHOW_ATTRIBUTION_SANCTION,
      data: sanctionData,
    });
  };

  const handleClikAddSanction = () => {
    openModal({
      view: ADD_ATTRIBUTION_SANCTION,
    });
  };
  const handleClikEditSanction = (sanctionData) => {
    openModal({
      view: EDIT_ATTRIBUTION_SANCTION,
      data: sanctionData,
    });
  };
  const handleClikDeletSanction = (sanctionData) => {
    openModal({
      view: DELETE_ATTRIBUTION_SANCTION,
      data: sanctionData,
    });
  };

  const PromiseSanctionRef = useRef(new AbortController());
  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: pageSize, search: search },
    };

    dispatch(retrieveSanctionsAsync(payload));
    onPageTotalCountChange(count);
    return () => {
      PromiseSanctionRef.current?.abort();
    };
  }, [count, pageIndex, search]);

  return (
    <AttributionSanctionPageContainer>
      <RowAction className="row-action-page">
        <div></div>
        <AddSanctionBtn
          className="bg-btn-alt-theme-color"
          onClick={handleClikAddSanction}
        >
          Ajouter une sanction
        </AddSanctionBtn>
      </RowAction>
      <DataTable
        className="table-align-center-not-first"
        columns={COLUMNS}
        data={collections}
        isLoading={status == "pending"}
        isSuccess={status == "complete"}
        manualPagination={true}
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
            enumOfView={listOfViewSanction}
          />
        </Modal>,
        document.body
      )}
    </AttributionSanctionPageContainer>
  );
};

export default AttributionSanctions;
