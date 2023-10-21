import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import { TableAction } from "../../../../components/DataTable/DataTable.styled";
import { StateButton } from "./Comptabilite.styled";
import { BsCheckLg } from "react-icons/bs";
import clsx from "clsx";

const ActionCell = ({ demande, onSelectState = () => {} }) => {
  const VALIDATE_BTN_CLASS = [];
  const REJECTED_BTN_CLASS = [];

  demande?.demandeState == "accepted"
    ? VALIDATE_BTN_CLASS.push("selected")
    : null;
  demande?.demandeState == "rejected"
    ? REJECTED_BTN_CLASS.push("selected")
    : null;

  const DISABLE_BTN = demande.demandeState != "pending";

  return (
    <TableAction>
      <StateButton
        disabled={DISABLE_BTN}
        className={clsx("accepted-btn", VALIDATE_BTN_CLASS.join(" "))}
        onClick={() => onSelectState(demande, "accepted")}
      >
        <BsCheckLg />{" "}
      </StateButton>
      <StateButton
        disabled={DISABLE_BTN}
        className={clsx("rejected-btn", REJECTED_BTN_CLASS.join(" "))}
        onClick={() => onSelectState(demande, "rejected")}
      >
        <AiOutlineClose />{" "}
      </StateButton>
    </TableAction>
  );
};

export default ActionCell;
