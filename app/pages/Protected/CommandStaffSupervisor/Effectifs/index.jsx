import React from "react";
import { EffectifPageContainer } from "./Effectifs.styled";
import { RowAction } from "../../../../components/PageContainer";
import DataTable from "../../../../components/DataTable";
import useLoader from "../../../../hooks/useLoader";
import useDelayed from "../../../../hooks/useDelayed";
import ActionCells from "../../../../components/DataTable/ActionCells";

const Effectifs = () => {
  const { loaderState, toggleLoader } = useLoader();

  useDelayed(toggleLoader, 1000);

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
        <ActionCells data={row.original} canEdit={true} canDelete={true} />
      ),
    },
  ];

  const collections = [
    {
      id: 22,
      matricule: 103,
      agent: "Jackson Marshall",
      phone: "555-4589",
      iban: "Jackmars",
      grade: "officier II",
      division: "Police Academy",
    },
  ];

  return (
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
  );
};

export default Effectifs;
