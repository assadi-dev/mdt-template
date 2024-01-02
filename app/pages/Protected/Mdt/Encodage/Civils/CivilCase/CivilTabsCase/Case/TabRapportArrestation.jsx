import React from "react";
import { CivilTabsContentRowAction } from "../CivilTabs.styled";
import { Button } from "../../../../../../../../components/PageContainer";
import DataTable from "../../../../../../../../components/DataTable";
import useDelayed from "../../../../../../../../hooks/useDelayed";
import useLoader from "../../../../../../../../hooks/useLoader";
import { createPortal } from "react-dom";
import useModalState from "../../../../../../../../hooks/useModalState";
import { datetimeFormatFr } from "../../../../../../../../services/utils/dateFormat";
import Modal from "../../../../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../../../../components/Modal/RenderModalFormContent";
import { ListAddArrestReportModalView } from "./Views/modal/Arrest_report/ArrestReportListView";

const TabRapportArrestation = () => {
  const { modalState, openModal, closeModal } = useModalState();

  const columns = [
    { Header: "N° Dossier", accessor: "id" },
    { Header: "Agent", accessor: "agent" },
    { Header: "Montant", accessor: "amount" },
    { Header: "date", accessor: "created_at" },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => <ActionCells canEdit={true} canDelete={true} />,
    },
  ];
  const { loaderState, toggleLoader } = useLoader();
  useDelayed(toggleLoader, 1000);

  return (
    <>
      <CivilTabsContentRowAction>
        <Button className="bg-btn-alt-theme-color">Ajouter</Button>
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
            enumOfView={ListAddArrestReportModalView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default TabRapportArrestation;
