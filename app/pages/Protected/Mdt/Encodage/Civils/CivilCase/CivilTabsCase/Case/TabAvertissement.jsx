import React from "react";
import { CivilTabsContentRowAction } from "../CivilTabs.styled";
import { Button } from "../../../../../../../../components/PageContainer";
import DataTable from "../../../../../../../../components/DataTable";
import ActionCells from "../../../../../../../../components/DataTable/ActionCells";
import useDelayed from "../../../../../../../../hooks/useDelayed";
import useLoader from "../../../../../../../../hooks/useLoader";

const TabAvertissement = () => {
  const columns = [
    { Header: "N° Dossier", accessor: "id" },
    { Header: "Agent", accessor: "agent" },
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

export default TabAvertissement;
