import React from "react";
import ShowRapport from "./ShowRapport";
import ConfirmDelete from "./ConfirmDelete";
import { RiCloseCircleFill, RiErrorWarningFill } from "react-icons/ri";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { FaExclamation, FaCheck } from "react-icons/fa6";

export const SHOW_RAPPORT = "show-rapport";
export const DELETE_RAPPORT = "delete-rapport";

export default {
  "show-rapport": {
    element: ShowRapport,
  },
  "delete-rapport": {
    element: ConfirmDelete,
  },
};

export const stateIcons = {
  good: { icon: FaCheck },
  warning: { icon: FaExclamation },
  bad: { icon: AiOutlineClose },
};
