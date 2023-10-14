import React from "react";
import {
  ActionButton,
  TableAction,
} from "../../../../../components/DataTable/DataTable.styled";
import { TfiTrash } from "react-icons/tfi";
import { RxEyeOpen } from "react-icons/rx";

const ActionCell = ({
  rapportdata,
  onShowRapport = () => {},
  onDelete = () => {},
}) => {
  const handleShowRapport = () => {
    onShowRapport(rapportdata);
  };

  const handleClickDelete = () => {
    onDelete(rapportdata);
  };

  return (
    <TableAction>
      <ActionButton className="bg-show-btn" onClick={handleShowRapport}>
        <RxEyeOpen />
      </ActionButton>
      <ActionButton className="bg-danger-btn" onClick={handleClickDelete}>
        <TfiTrash />
      </ActionButton>
    </TableAction>
  );
};

export default ActionCell;
