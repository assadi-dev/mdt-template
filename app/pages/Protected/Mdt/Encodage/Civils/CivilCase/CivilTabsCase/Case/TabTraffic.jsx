import React from "react";
import { CivilTabsContentRowAction } from "../CivilTabs.styled";
import DataTable from "../../../../../../../../components/DataTable";
import { Button } from "../../../../../../../../components/PageContainer";
import useLoader from "../../../../../../../../hooks/useLoader";
import useDelayed from "../../../../../../../../hooks/useDelayed";

const TabTraffic = () => {
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
  const { loaderState, toggleLoader } = useLoader();
  useDelayed(toggleLoader, 1000);

  return (
    <>
      <CivilTabsContentRowAction>
        <Button className="bg-btn-alt-theme-color">Ajouter</Button>
      </CivilTabsContentRowAction>
      <DataTable
        columns={columns}
        className="case-table"
        manualPagination={true}
        isLoading={loaderState}
        isSuccess={!loaderState}
      />
    </>
  );
};

export default TabTraffic;
