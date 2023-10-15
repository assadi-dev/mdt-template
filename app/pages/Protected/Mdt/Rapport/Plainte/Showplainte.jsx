import React from "react";
import ShowActionButton from "../../../../../components/Button/ShowActionButton";
import { TableAction } from "../../../../../components/DataTable/DataTable.styled";

const Showplainte = ({
  plainte = null,
  onShowPreviewPlainte = () => {},
  ...props
}) => {
  const handleClickShowModal = () => {
    onShowPreviewPlainte(plainte);
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

export default Showplainte;
