import React from "react";
import { PageContainer, Row } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ActionCell from "./ActionCell";

const ConsultationRapportRookie = () => {
  const columns = [
    { Header: "Agent", accessor: "agent" },
    { Header: "Rookie concerné", accessor: "rookieConcerned" },
    { Header: "Date", accessor: "createdAt" },
    { Header: "Action", accessor: "", Cell: () => <ActionCell /> },
  ];

  const collections = [
    {
      agent: "96-Tommy-Stewart",
      rookieConcerned: "103-Alyson-Finley",
      createdAt: "07-09-2023 07:25",
    },
  ];

  return (
    <PageContainer>
      <Row style={{ height: "100px" }}></Row>
      <DataTable
        data={collections}
        columns={columns}
        isLoading={false}
        isSuccess={true}
      />
    </PageContainer>
  );
};

export default ConsultationRapportRookie;
