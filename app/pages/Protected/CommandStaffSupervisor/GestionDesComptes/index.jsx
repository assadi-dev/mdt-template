import React from "react";
import { RowAction } from "../../../../components/PageContainer";
import DataTable from "../../../../components/DataTable";
import useLoader from "../../../../hooks/useLoader";
import useDelayed from "../../../../hooks/useDelayed";
import ActionCells from "../../../../components/DataTable/ActionCells";
import ActionValidate from "./ActionValidate";
import { GestionDesCompteoageContainer } from "./GestionDesCompte.styled";

const GestionDesComptes = () => {
  const { loaderState, toggleLoader } = useLoader();
  useDelayed(toggleLoader, 1000);

  const handleValidate = (checked, agent) => {
    const id = agent?.id;
    console.log(checked, id);
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
      Header: "Date de création",
      accessor: "createdAt",
    },
    {
      Header: "Validation",
      accessor: "isValidate",
      Cell: ({ row }) => (
        <ActionValidate
          agentData={row?.original}
          onValidateAction={handleValidate}
        />
      ),
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => <ActionCells data={row?.original} canDelete={true} />,
    },
  ];

  const collections = [
    {
      id: 1,
      matricule: 109,
      agent: "Gustavo Rael",
      createdAt: "20/10/2023 à 16:00",
      isValidate: true,
    },
  ];

  return (
    <GestionDesCompteoageContainer>
      <RowAction className="row-action-page"></RowAction>
      <DataTable
        className="table-align-center-not-first"
        data={collections}
        columns={COLUMNS}
        isLoading={loaderState}
        isSuccess={!loaderState}
      />
    </GestionDesCompteoageContainer>
  );
};

export default GestionDesComptes;
