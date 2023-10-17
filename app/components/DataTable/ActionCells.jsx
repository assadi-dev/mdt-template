import React from "react";
import { ActionButton, TableAction } from "./DataTable.styled";
import { BsPencilSquare } from "react-icons/bs";
import { TfiTrash } from "react-icons/tfi";

const ActionCells = ({
  data,
  canDelete = false,
  canEdit = false,
  onEdit = () => {},
  onDelete = () => {},
}) => {
  const payloads = { ...data };
  const handleClickEdit = () => {
    onEdit(payloads);
  };
  const handleClicDelete = () => {
    onDelete(payloads);
  };

  return (
    <TableAction>
      {canEdit && (
        <ActionButton className="btn-edit-table" onClick={handleClickEdit}>
          <BsPencilSquare />
        </ActionButton>
      )}
      {canDelete && (
        <ActionButton className="btn-delete-table" onClick={handleClicDelete}>
          <TfiTrash />
        </ActionButton>
      )}
    </TableAction>
  );
};

export default ActionCells;
