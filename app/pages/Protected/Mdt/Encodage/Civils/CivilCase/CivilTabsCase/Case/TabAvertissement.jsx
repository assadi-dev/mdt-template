import React from "react";
import { CivilTabsContentRowAction } from "../CivilTabs.styled";
import { Button } from "../../../../../../../../components/PageContainer";
import DataTable from "../../../../../../../../components/DataTable";
import ActionCells from "../../../../../../../../components/DataTable/ActionCells";
import useDelayed from "../../../../../../../../hooks/useDelayed";
import useLoader from "../../../../../../../../hooks/useLoader";
import useModalState from "../../../../../../../../hooks/useModalState";
import Modal from "../../../../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../../../../components/Modal/RenderModalFormContent";
import {
  ADD_AVERTISSEMENT,
  ListAvertissementModalView,
} from "./Views/modal/Avertissement/AvertissementListView";
import { createPortal } from "react-dom";
import { datetimeFormatFr } from "../../../../../../../../services/utils/dateFormat";

const TabAvertissement = () => {
  const { modalState, openModal, closeModal } = useModalState();
  const columns = [
    { Header: "N° Dossier", accessor: "numeroAvertissement" },
    { Header: "Agent", accessor: "agent" },
    {
      Header: "date",
      accessor: "created_at",
      Cell: ({ value }) => datetimeFormatFr(value?.date),
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => <ActionCells canEdit={true} canDelete={true} />,
    },
  ];
  const { loaderState, toggleLoader } = useLoader();
  useDelayed(toggleLoader, 1000);

  const handleClickAddbtn = () => {
    openModal({
      view: ADD_AVERTISSEMENT,
    });
  };

  return (
    <>
      <CivilTabsContentRowAction>
        <Button className="bg-btn-alt-theme-color" onClick={handleClickAddbtn}>
          Ajouter
        </Button>
      </CivilTabsContentRowAction>
      <DataTable
        columns={columns}
        className="case-table"
        manualPagination={true}
        isLoading={loaderState}
        isSuccess={!loaderState}
      />

      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={ListAvertissementModalView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default TabAvertissement;
