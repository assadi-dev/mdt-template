import React from "react";
import { BsHourglassSplit, BsCheckLg } from "react-icons/bs";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
export const statelistIcon = [
  {
    name: "pending",
    label: "En attente",
    icon: <BsHourglassSplit />,
  },
  {
    name: "rejected",
    label: "Rejeté",
    icon: <AiOutlineClose />,
  },
  {
    name: "accepted",
    label: "Accepté",
    icon: <BsCheckLg />,
  },
];
