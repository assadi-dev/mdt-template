import React from "react";
import { ActionButton, TableAction } from "./DataTable.styled";

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
      <ActionButton
        className="edit"
        onClick={handleClickEdit}
      ></ActionButton>{" "}
      <ActionButton className="delete" onClick={handleClicDelete}>
        {" "}
      </ActionButton>{" "}
    </TableAction>
  );
};

export default ActionCells;
