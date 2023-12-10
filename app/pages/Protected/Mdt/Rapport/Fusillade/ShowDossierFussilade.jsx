import React from "react";
import { TableAction } from "../../../../../components/DataTable/DataTable.styled";
import ShowActionButton from "../../../../../components/Button/ShowActionButton";

const ShowDossierFussilade = ({
  reportData,
  onShowGunFightReport = () => {},
}) => {
  const handleShowReportData = () => {
    onShowGunFightReport(reportData);
  };

  return (
    <TableAction>
      <ShowActionButton
        className="bg-show-btn"
        onClick={handleShowReportData}
      />
    </TableAction>
  );
};

export default ShowDossierFussilade;
