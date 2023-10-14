import React from "react";
import ShowRapport from "./ShowRapport";
import ConfirmDelete from "./ConfirmDelete";

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
