import React from "react";
import { ActionButton, TableAction } from "./DataTable.styled";

const ActionCells = ({
  canDelete = false,
  canEdit = false,
  onEdit,
  onDelete,
}) => {
  return (
    <TableAction>
      {" "}
      <ActionButton className="edit"></ActionButton>{" "}
      <ActionButton className="delete"> </ActionButton>{" "}
    </TableAction>
  );
};

export default ActionCells;
