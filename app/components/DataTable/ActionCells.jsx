import React from "react";
import { ActionButton, TableAction } from "./DataTable.styled";
import { BsPencilSquare } from "react-icons/bs";
import { TfiTrash } from "react-icons/tfi";

const ActionCells = ({
  data,
  canDelete = false,
  canEdit = false,
  onEdit,
  onDelete,
}) => {
  const { id, name, faction } = data;
  const handleClickEdit = () => {
    onEdit({ id, name, faction });
  };
  const handleClicDelete = () => {
    onDelete({ id, name, faction });
  };

  return (
    <TableAction>
      {" "}
      <ActionButton className="btn-edit-table" onClick={handleClickEdit}>
        <BsPencilSquare />
      </ActionButton>{" "}
      <ActionButton className="btn-delete-table" onClick={handleClicDelete}>
        <TfiTrash />
      </ActionButton>{" "}
    </TableAction>
  );
};

export default ActionCells;
