import React, { useEffect } from "react";
import { CivilTabsContentRowAction } from "../CivilTabs.styled";
import DataTable from "../../../../../../../../components/DataTable";
import { Button } from "../../../../../../../../components/PageContainer";
import useLoader from "../../../../../../../../hooks/useLoader";
import { execDelayed } from "../../../../../../../../services/utils/functions";
import useDelayed from "../../../../../../../../hooks/useDelayed";
import { createPortal } from "react-dom";
import useModalState from "../../../../../../../../hooks/useModalState";
import { datetimeFormatFr } from "../../../../../../../../services/utils/dateFormat";
import Modal from "../../../../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../../../../components/Modal/RenderModalFormContent";
import {
  ADD_ARREST_FOLDER,
  ListAddArrestFolderModalView,
} from "./Views/modal/Arrest_folder/ArrestFolderlistView";
import { useDispatch, useSelector } from "react-redux";

const TabDossierArrestation = () => {
  const { modalState, openModal, closeModal } = useModalState();

  const { loaderState, toggleLoader } = useLoader();
  useDelayed(toggleLoader, 1000);

  /*   const { collections, status, count } = useSelector(
    (state) => state.TrafficReducer
  );
 */
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

  const handleClickAddbtn = () => {
    openModal({
      view: ADD_ARREST_FOLDER,
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
            enumOfView={ListAddArrestFolderModalView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default TabDossierArrestation;
