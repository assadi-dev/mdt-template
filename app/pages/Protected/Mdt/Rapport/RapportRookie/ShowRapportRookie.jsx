import React from "react";
import { TableAction } from "../../../../../components/DataTable/DataTable.styled";
import ShowActionButton from "../../../../../components/Button/ShowActionButton";

const ShowRapportRookie = ({
  rapportRookie,
  onShowRapport = () => {},
  ...props
}) => {
  const handleClickShowModal = () => {
    onShowRapport(rapportRookie);
  };

  return (
    <TableAction {...props}>
      <ShowActionButton
        className="bg-show-btn"
        onClick={handleClickShowModal}
      />
    </TableAction>
  );
};

export default ShowRapportRookie;
