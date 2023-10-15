import React from "react";
import AddRapporRookieView from "./AddRapporRookieView";
import { AiOutlineClose } from "react-icons/ai";
import { FaExclamation, FaCheck } from "react-icons/fa6";

export const ADD_RAPPORT_ROOKIE = "add-rapport-rookie";
export const SHOW_RAPPORT_ROOKIE = "show-rapport-rookie";

export const listOfRapporRookieView = {
  "add-rapport-rookie": {
    element: AddRapporRookieView,
  },
  "show-rapport-rookie": {
    element: null,
  },
};

export const stateIcons = {
  good: { icon: FaCheck },
  warning: { icon: FaExclamation },
  bad: { icon: AiOutlineClose },
};

export const stateValue = ["bad", "good", "warning"];
