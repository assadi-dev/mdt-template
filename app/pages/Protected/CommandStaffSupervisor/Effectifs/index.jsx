import React from "react";
import { EffectifPageContainer } from "./Effectifs.styled";
import { RowAction } from "../../../../components/PageContainer";
import DataTable from "../../../../components/DataTable";
import useLoader from "../../../../hooks/useLoader";
import useDelayed from "../../../../hooks/useDelayed";
import ActionCells from "../../../../components/DataTable/ActionCells";
import Modal from "../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../components/Modal/RenderModalContent";
import useModalState from "../../../../hooks/useModalState";
import {
  DELETE_EFFECTIF,
  EDIT_EFFECTIF,
  listEffectifView,
} from "./Views/ListOfEffectifsView";

const Effectifs = () => {
  const { loaderState, toggleLoader } = useLoader();

  useDelayed(toggleLoader, 1000);

  const { modalState, openModal, closeModal } = useModalState();

  const handleClickEdit = (effectif) => {
    openModal({
      view: EDIT_EFFECTIF,
      data: effectif,
    });
  };
  const handleClickDelete = (effectif) => {
    openModal({
      view: DELETE_EFFECTIF,
      data: effectif,
    });
  };

  const COLUMNS = [
    {
      Header: "Matricule",
      accessor: "matricule",
    },
    {
      Header: "Agent",
      accessor: "agent",
    },
    {
      Header: "N°de téléphone",
      accessor: "phone",
    },
    {
      Header: "IBAN",
      accessor: "iban",
    },
    {
      Header: "Grade",
      accessor: "grade",
    },
    {
      Header: "Divisions",
      accessor: "division",
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          canEdit={true}
          canDelete={true}
          onEdit={handleClickEdit}
          onDelete={handleClickDelete}
        />
      ),
    },
  ];

  const collections = [
    {
      id: 22,
      matricule: 103,
      agent: "Jackson Marshall",
      firstname: "Jackson",
      lastname: "Marshall",
      phone: "555-4589",
      iban: "Jackmars",
      grade: "officier I",
      division: "Police Academy",
      photo:
        "https://static.wikia.nocookie.net/gtawiki/images/8/86/Jernigan-GTAV-SheriffDeputy-Portrait.png/revision/latest?cb=20180401093533",
    },
    {
      id: 22,
      photo:
        "https://static.wikia.nocookie.net/gtawiki/images/8/86/Jernigan-GTAV-SheriffDeputy-Portrait.png/revision/latest?cb=20180401093533",
      matricule: 109,
      agent: "Catherine",
      firstname: "Oconor",
      lastname: "Marshall",
      phone: "555-456677",
      iban: "123456789",
      grade: "officier II",
      division: "Police Academy",
    },
  ];

  return (
    <>
      <EffectifPageContainer>
        <RowAction className="row-action-page"></RowAction>
        <DataTable
          className="table-align-center-not-first"
          columns={COLUMNS}
          data={collections}
          isLoading={loaderState}
          isSuccess={!loaderState}
        />
      </EffectifPageContainer>
      <Modal isOpen={modalState.isOpen}>
        <RenderModalFormContent
          view={modalState.view}
          payload={modalState.data}
          enumOfView={listEffectifView}
          onCloseModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default Effectifs;
