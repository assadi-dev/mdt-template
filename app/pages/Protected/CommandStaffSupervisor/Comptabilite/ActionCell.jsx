import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import { TableAction } from "../../../../components/DataTable/DataTable.styled";
import { StateButton } from "./Comptabilite.styled";
import { BsCheckLg } from "react-icons/bs";
import clsx from "clsx";

const ActionCell = ({ demandeState = "waiting" }) => {
  const VALIDATE_BTN_CLASS = [];
  const REJECTED_BTN_CLASS = [];

  demandeState == "accepted" ? VALIDATE_BTN_CLASS.push("selected") : null;
  demandeState == "rejected" ? REJECTED_BTN_CLASS.push("selected") : null;

  return (
    <TableAction>
      <StateButton
        className={clsx("accepted-btn", VALIDATE_BTN_CLASS.join(" "))}
      >
        <BsCheckLg />{" "}
      </StateButton>
      <StateButton
        className={clsx("rejected-btn", REJECTED_BTN_CLASS.join(" "))}
      >
        <AiOutlineClose />{" "}
      </StateButton>
    </TableAction>
  );
};

export default ActionCell;
