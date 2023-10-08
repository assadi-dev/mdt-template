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

const AttributionVehicules = () => {
  const { endLoader, loaderState } = useLoader();
  useDelayed(endLoader, 1000);

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
        <ActionCells data={row.original} canEdit={true} canDelete={true} />
      ),
    },
  ];
  const collections = [
    {
      id: 1,
      matricule: 103,
      agent: "jackson Marshall",
      grade: "Rookie",
      typeVehicule: "Buffalo S",
      idVehicule: 585613,
      plaqueVehicule: "49GHT256",
    },
  ];
  return (
    <AttributionVehicule>
      <RowAction className="row-action-page">
        <div></div>
        <AddAttributionVehiculeButton className="bg-btn-alt-theme-color">
          Ajouter des véhicules
        </AddAttributionVehiculeButton>
      </RowAction>
      <DataTable
        columns={COLUMNS}
        data={collections}
        isLoading={loaderState}
        isSuccess={!loaderState}
      />
    </AttributionVehicule>
  );
};

export default AttributionVehicules;
