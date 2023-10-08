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

const AttributionSanctions = () => {
  const { endLoader, loaderState } = useLoader();
  useDelayed(endLoader, 1000);

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
      Cell: ({ row }) => <ShowSanction className="bg-show-btn" />,
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
      agent: "jackson Marshall",
      decideur: "Alyson Finley",
      raison: "Uriner dans la voie publique",

      createdAt: "08/10/2023",
    },
  ];

  return (
    <AttributionSanctionPageContainer>
      <RowAction className="row-action-page">
        <div></div>
        <AddSanctionBtn className="bg-btn-alt-theme-color">
          Ajouter une sanction
        </AddSanctionBtn>
      </RowAction>
      <DataTable
        columns={COLUMNS}
        data={collections}
        isLoading={loaderState}
        isSuccess={!loaderState}
      />
    </AttributionSanctionPageContainer>
  );
};

export default AttributionSanctions;
