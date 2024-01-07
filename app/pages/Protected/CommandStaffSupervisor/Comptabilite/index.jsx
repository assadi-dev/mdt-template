import React, { useEffect, useState } from "react";
import { ComptabiliteCsPage } from "./Comptabilite.styled";
import { RowAction } from "../../../../components/PageContainer";
import DataTable from "../../../../components/DataTable";
import useDelayed from "../../../../hooks/useDelayed";
import useLoader from "../../../../hooks/useLoader";
import ActionCell from "./ActionCell";
import ShowDemandeComptability from "./ShowDemandeComptability";
import { createPortal } from "react-dom";
import Modal from "../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../components/Modal/RenderModalContent";
import useModalState from "../../../../hooks/useModalState";
import {
  SHOW_DEMANDE_COMPTABILITE,
  collections,
  listOfView,
} from "./View/ListOfView";
import useCustomPagination from "../../../../hooks/useCustomPagination";
import { defaultPageSize } from "../../../../config/constantes";
import { retrieveAccountingRequest } from "../../../../features/AccountingRequest/AccountingRequestAsyn.action";
import { useDispatch, useSelector } from "react-redux";
import { ShowAgent } from "../../Services/DemandesComptabilite/helpers";
import { editAccountingRequestByPage } from "../../../../features/AccountingRequest/AccountingRequest.slice";
import { toastError, toastSuccess } from "../../../../services/utils/alert";
import { updateAccountingRequest } from "./helpers";
import ShowAmountComptability from "./ShowAmountComptability";

const Comptabilite = () => {
  const dispatch = useDispatch();
  const { collections, status, count } = useSelector(
    (state) => state.AccountingRequestByPageReducer
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

  const { modalState, openModal, closeModal } = useModalState();

  const handleShowRapport = (rapport) => {
    openModal({
      view: SHOW_DEMANDE_COMPTABILITE,
      data: rapport,
    });
  };

  const handleClickStateDemande = async (payload, state) => {
    try {
      let data = { ...payload, requestState: state };
      await updateAccountingRequest(payload?.id, { requestState: state });
      dispatch(editAccountingRequestByPage(data));
      toastSuccess();
    } catch (error) {
      toastError();
    }
  };

  useEffect(() => {
    try {
      const payload = {
        page: pageIndex,
        params: { item_per_page: pageSize, search: search },
      };

      const fetchPromise = dispatch(retrieveAccountingRequest(payload));
      onPageTotalCountChange(count);

      return () => {
        fetchPromise.abort();
      };
    } catch (error) {
      toastError("Une erreur est survenue lors de la récuperation des données");
    }
  }, [search, pageIndex, count]);

  const COLUMNS = [
    {
      Header: "Matricule",
      accessor: "matricule",
    },
    {
      Header: "Agent",
      Cell: ({ row }) => {
        const { matricule, firstname, lastname } = row?.original;
        return ShowAgent({ matricule, firstname, lastname });
      },
    },
    {
      Header: "Objet de la demande",
      accessor: "subject",
    },
    {
      Header: "Montant",
      accessor: "amount",
      Cell: ({ value }) => <ShowAmountComptability amount={value} />,
    },
    {
      Header: "Rapport",
      accessor: "",
      Cell: ({ row }) => (
        <ShowDemandeComptability
          rapport={row.original}
          onShowDemande={handleShowRapport}
        />
      ),
    },
    {
      Header: "Date et Heure",
      accessor: "date",
    },
    {
      Header: "Actions",
      accessor: "demandeState",
      Cell: ({ row }) => (
        <ActionCell
          demande={row.original}
          onSelectState={handleClickStateDemande}
        />
      ),
    },
  ];

  return (
    <ComptabiliteCsPage>
      <RowAction className="row-action-page"></RowAction>
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
            enumOfView={listOfView}
          />
        </Modal>,
        document.body
      )}
    </ComptabiliteCsPage>
  );
};

export default Comptabilite;
