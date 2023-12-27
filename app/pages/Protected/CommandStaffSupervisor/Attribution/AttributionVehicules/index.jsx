import React from "react";
import {
  AddAttributionVehiculeButton,
  AttributionVehicule,
} from "./AttributionVehicules.styled";
import { RowAction } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import useLoader from "../../../../../hooks/useLoader";
import useDelayed from "../../../../../hooks/useDelayed";
import ActionCells from "../../../../../components/DataTable/ActionCells";
import {
  ADD_ATTRIBUTION_VEHICULE,
  DELETE_ATTRIBUTION_VEHICULE,
  EDIT_ATTRIBUTION_VEHICULE,
  SHOW_ATTRIBUTION_VEHICULE,
  listOfAttributionVehicule,
} from "./Views/ListOfViews";
import useModalState from "../../../../../hooks/useModalState";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalFormContent";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

const AttributionVehicules = () => {
  const { endLoader, loaderState } = useLoader();
  useDelayed(endLoader, 1000);
  const dispatch = useDispatch();
  const { collecttions, count, status, error } = useSelector(
    (state) => state.VehicleAttributionReducer
  );

  const { modalState, openModal, closeModal } = useModalState();

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
      Header: "Grades",
      accessor: "grade",
    },
    {
      Header: "Type de vehicule",
      accessor: "typeVehicule",
    },
    {
      Header: "ID Vehicule",
      accessor: "idVehicule",
    },
    {
      Header: "Plaque du véhicule",
      accessor: "plaqueVehicule",
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          canEdit={true}
          canDelete={true}
          onEdit={handleClikEditAttributionVehicule}
          onDelete={handleClikDeletAttributionVehicule}
        />
      ),
    },
  ];

  const handleClikAddAttributionVehicule = () => {
    openModal({
      view: ADD_ATTRIBUTION_VEHICULE,
    });
  };
  const handleClikEditAttributionVehicule = (attributionVehicule) => {
    openModal({
      view: EDIT_ATTRIBUTION_VEHICULE,
      data: attributionVehicule,
    });
  };
  const handleClikDeletAttributionVehicule = (attributionVehicule) => {
    openModal({
      view: DELETE_ATTRIBUTION_VEHICULE,
      data: attributionVehicule,
    });
  };

  return (
    <AttributionVehicule>
      <RowAction className="row-action-page">
        <div></div>
        <AddAttributionVehiculeButton
          className="bg-btn-alt-theme-color"
          onClick={handleClikAddAttributionVehicule}
        >
          Attribuer un véhicule
        </AddAttributionVehiculeButton>
      </RowAction>
      <DataTable
        columns={COLUMNS}
        data={collecttions}
        isLoading={loaderState}
        isSuccess={!loaderState}
      />
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={listOfAttributionVehicule}
          />
        </Modal>,
        document.body
      )}
    </AttributionVehicule>
  );
};

export default AttributionVehicules;
