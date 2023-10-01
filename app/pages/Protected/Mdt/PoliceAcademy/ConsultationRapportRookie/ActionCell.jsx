import React from "react";
import {
  ActionButton,
  TableAction,
} from "../../../../../components/DataTable/DataTable.styled";
import { AiOutlineEye } from "react-icons/ai";
import { TfiTrash } from "react-icons/tfi";
import { RxEyeOpen } from "react-icons/rx";

const ActionCell = () => {
  return (
    <TableAction>
      <ActionButton className="bg-show-btn">
        <RxEyeOpen />
      </ActionButton>
      <ActionButton className="bg-danger-btn">
        <TfiTrash />
      </ActionButton>
    </TableAction>
  );
};

export default ActionCell;
