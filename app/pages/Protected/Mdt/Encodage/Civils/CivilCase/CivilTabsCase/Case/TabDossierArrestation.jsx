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
  DELETE_ARREST_FOLDER,
  EDIT_ARREST_FOLDER,
  ListAddArrestFolderModalView,
} from "./Views/modal/Arrest_folder/ArrestFolderlistView";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFolderArrestAsyncCollection } from "../../../../../../../../features/Civils/Reports/ReportAsyncAction";
import ActionCells from "../../../../../../../../components/DataTable/ActionCells";
import { defaultPageSize } from "../../../../../../../../config/constantes";
import useCustomPagination from "../../../../../../../../hooks/useCustomPagination";
import ShowAmount from "./Views/ShowAmount";

const TabDossierArrestation = () => {
  const { modalState, openModal, closeModal } = useModalState();
  const { idCivil } = useParams();
  const dispatch = useDispatch();

  const { collections, status, count } = useSelector(
    (state) => state.ArrestFolderReducer
  );

  const columns = [
    { Header: "N° Dossier", accessor: "numeroArrestFolder" },
    { Header: "Agent", accessor: "agent" },
    {
      Header: "Montant",
      accessor: "amount",
      Cell: ({ value }) => <ShowAmount amount={value} />,
    },
    {
      Header: "date",
      accessor: "createdAt",
      Cell: ({ value }) => datetimeFormatFr(value?.date),
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          onEdit={handleClickEdit}
          onDelete={handleClickDelete}
          canEdit={true}
          canDelete={true}
        />
      ),
    },
  ];

  const handleClickAddbtn = () => {
    openModal({
      view: ADD_ARREST_FOLDER,
    });
  };

  const handleClickDelete = (arrestFolderData) => {
    openModal({
      view: DELETE_ARREST_FOLDER,
      data: arrestFolderData,
    });
  };
  const handleClickEdit = (arrestFolderData) => {
    openModal({
      view: EDIT_ARREST_FOLDER,
      data: arrestFolderData,
    });
  };

  const PromiseRef = React.useRef();

  const {
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
    pageIndex,
    search,
    totalCount,
    pageSize,
  } = useCustomPagination(defaultPageSize, 0, 0, "");

  React.useEffect(() => {
    if (!idCivil) return;
    const payload = {
      idCivil,
      params: { page: pageIndex, item_per_page: defaultPageSize, search },
    };
    PromiseRef.current = dispatch(fetchFolderArrestAsyncCollection(payload));
    onPageTotalCountChange(count);
    return () => {
      PromiseRef.current?.abort();
    };
  }, [idCivil, pageIndex, search, count]);

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
        data={collections}
        isLoading={status != "complete"}
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
            enumOfView={ListAddArrestFolderModalView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default TabDossierArrestation;
