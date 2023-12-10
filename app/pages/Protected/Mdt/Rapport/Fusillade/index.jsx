import React, { useEffect } from "react";
import {
  AddDossierFusilladeBtn,
  FusilladePageContainer,
} from "./Fusillade.styled";
import { RowAction } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ShowDossierFussilade from "./ShowDossierFussilade";
import ActionCells from "../../../../../components/DataTable/ActionCells";
import useModalState from "../../../../../hooks/useModalState";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalFormContent";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  ADD_DOSSIER_FUSILLADE,
  DELETE_DOSSIER_FUSILLADE,
  EDIT_DOSSIER_FUSILLADE,
  PREVIEW_DOSSIER_FUSILLADE,
  listOfDossierFusilladeView,
} from "./ModalView/ListDossierFusillade";
import { datetimeFormatFr } from "../../../../../services/utils/dateFormat";
import { defaultPageSize } from "../../../../../config/constantes";
import useCustomPagination from "../../../../../hooks/useCustomPagination";
import { retrieveGunFightReportAsync } from "../../../../../features/GunFightReport/GunFightAsynAction";

const Fusillade = () => {
  const { modalState, openModal, closeModal } = useModalState();
  const { collections, status, error, count } = useSelector(
    (state) => state.GunFightReportReducer
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

  const COLUMNS = [
    {
      Header: "N° du rapport",
      accessor: "numeroReport",
    },
    {
      Header: "Agent",
      accessor: "agentFullname",
    },
    {
      Header: "Date et heure de la fusillade",
      accessor: "createdAt",
      Cell: ({ value }) => datetimeFormatFr(value?.date),
    },

    {
      Header: "Rapport",
      accessor: "",
      Cell: ({ row }) => (
        <ShowDossierFussilade
          reportData={row.original}
          onShowGunFightReport={handlePreviewReport}
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
          onDelete={() => handleClickDelete(row.original)}
          onEdit={() => handleClickEdit(row.original)}
        />
      ),
    },
  ];

  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: pageSize, search: search },
    };

    dispatch(retrieveGunFightReportAsync(payload));
    onPageTotalCountChange(count);
  }, [pageIndex, search, count]);

  const handleClickAdd = () => {
    openModal({
      view: ADD_DOSSIER_FUSILLADE,
    });
  };

  const handlePreviewReport = (rapport) => {
    openModal({
      view: PREVIEW_DOSSIER_FUSILLADE,
      data: rapport,
    });
  };

  const handleClickDelete = (dossierFusillade) => {
    openModal({
      view: DELETE_DOSSIER_FUSILLADE,
      data: dossierFusillade,
    });
  };
  const handleClickEdit = (dossierFusillade) => {
    openModal({
      view: EDIT_DOSSIER_FUSILLADE,
      data: dossierFusillade,
    });
  };

  return (
    <>
      <FusilladePageContainer>
        <RowAction style={{ height: "100px" }}>
          <div></div>
          <AddDossierFusilladeBtn
            className="bg-btn-alt-theme-color"
            onClick={handleClickAdd}
          >
            Ajouter
          </AddDossierFusilladeBtn>
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
      </FusilladePageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={listOfDossierFusilladeView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default Fusillade;
