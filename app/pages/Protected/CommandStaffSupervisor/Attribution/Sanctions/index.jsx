import React from "react";
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
  EDIT_ATTRIBUTION_SANCTION,
  collections,
  listOfViewSanction,
} from "./Views/listOfViews";
import { createPortal } from "react-dom";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalFormContent";

const AttributionSanctions = () => {
  const { endLoader, loaderState } = useLoader();
  useDelayed(endLoader, 1000);

  const { modalState, openModal, closeModal } = useModalState();

  const COLUMNS = [
    {
      Header: "Date",
      accessor: "createdAt",
    },
    {
      Header: "Agent Concerné",
      accessor: "agent",
    },
    {
      Header: "Decideur",
      accessor: "decideur",
    },
    {
      Header: "Raison",
      accessor: "",
      Cell: ({ row }) => (
        <ShowSanction className="bg-show-btn" sanctionData={row.original} />
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
          onEdit={handleClikAEditSanction}
        />
      ),
    },
  ];

  const handleClikAddSanction = () => {
    openModal({
      view: ADD_ATTRIBUTION_SANCTION,
    });
  };
  const handleClikAEditSanction = (sanctionData) => {
    openModal({
      view: EDIT_ATTRIBUTION_SANCTION,
      data: sanctionData,
    });
  };

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
        isLoading={loaderState}
        isSuccess={!loaderState}
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
