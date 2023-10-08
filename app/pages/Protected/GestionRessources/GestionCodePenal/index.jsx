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

const GestionCodePenal = () => {
  const { endLoader, loaderState } = useLoader();
  useDelayed(endLoader, 1000);

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
        <ActionCells data={row.original} canEdit={true} canDelete={true} />
      ),
    },
  ];
  const collections = [
    {
      id: 1,
      label: "Circulation zone interdite",
      categorie: "Contravention",
      amount: 400,
      peine: "0:00:00",
      createdAt: "08/10/2023",
    },
  ];

  return (
    <GestionCodePenalPage>
      <RowAction className="row-action-page">
        <div></div>
        <AddCodePenalBtn className="bg-btn-alt-theme-color">
          Ajouter
        </AddCodePenalBtn>
      </RowAction>
      <DataTable
        className="table-align-center-not-first"
        columns={COLUMNS}
        data={collections}
        isLoading={loaderState}
        isSuccess={!loaderState}
      />
    </GestionCodePenalPage>
  );
};

export default GestionCodePenal;
