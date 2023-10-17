import React from "react";
import useLoader from "../../../../hooks/useLoader";
import useDelayed from "../../../../hooks/useDelayed";
import ActionCells from "../../../../components/DataTable/ActionCells";
import { RowAction } from "../../../../components/PageContainer";
import {
  AddCodePenalBtn,
  GestionCodePenalPage,
} from "./GestionCodePenal.styled";
import DataTable from "../../../../components/DataTable";
import useModalState from "../../../../hooks/useModalState";
import { createPortal } from "react-dom";
import Modal from "../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../components/Modal/RenderModalFormContent";
import {
  ADD_CODE_PENAL,
  DELETE_CODE_PENAL,
  EDIT_CODE_PENAL,
  LIST_OF_VIEWs_CODE_PENAL,
} from "./ModalView/listOfgCodePenalView";
import uniqid from "uniqid";
import { codePenalLists } from "../../../../config/codePenal";
import useCustomPagination from "../../../../hooks/useCustomPagination";

const GestionCodePenal = () => {
  const { endLoader, loaderState } = useLoader();
  useDelayed(endLoader, 1000);

  const { modalState, openModal, closeModal } = useModalState();

  const handelClickEdit = (codePenal) => {
    openModal({
      view: EDIT_CODE_PENAL,
      data: codePenal,
    });
  };
  const handelClickAdd = () => {
    openModal({
      view: ADD_CODE_PENAL,
    });
  };
  const handelClickDelete = (codePenal) => {
    openModal({
      view: DELETE_CODE_PENAL,
      data: codePenal,
    });
  };

  const COLUMNS = [
    {
      Header: "Infraction",
      accessor: "label",
    },
    {
      Header: "Categorie",
      accessor: "categorie",
    },
    {
      Header: "Amendes",
      accessor: "amount",
    },
    {
      Header: "Peine",
      accessor: "peine",
    },

    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          canEdit={true}
          canDelete={true}
          onEdit={handelClickEdit}
          onDelete={handelClickDelete}
        />
      ),
    },
  ];

  const collections = [
    ...codePenalLists.map((codepenal) => {
      const id = uniqid();
      const createdAt = new Date();
      const amount = codepenal?.amount;

      return { id, ...codepenal, amount, createdAt };
    }),
  ];

  const totalCollection = collections.length;

  const { totalCount, onPageChange, pageIndex, onPageTotalCountChange } =
    useCustomPagination();

  return (
    <>
      <GestionCodePenalPage>
        <RowAction className="row-action-page">
          <div></div>
          <AddCodePenalBtn
            className="bg-btn-alt-theme-color"
            onClick={handelClickAdd}
          >
            Ajouter
          </AddCodePenalBtn>
        </RowAction>
        <DataTable
          manualPagination={true}
          className="table-align-center-not-first"
          columns={COLUMNS}
          data={collections}
          isLoading={loaderState}
          isSuccess={!loaderState}
        />
      </GestionCodePenalPage>
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            enumOfView={LIST_OF_VIEWs_CODE_PENAL}
            onCloseModal={closeModal}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default GestionCodePenal;
