import React from "react";
import AddAvertissement from "./AddAvertissement";
import ShowAvertissement from "./ShowAvertissement";
import DeleteAvertissementView from "./DeleteAvertissementView";
import EditAvertissement from "./EditAvertissement";

export const ADD_AVERTISSEMENT = "ADD_AVERTISSEMENT";
export const SHOW_AVERTISSEMENT = "SHOW_AVERTISSEMENT";
export const EDIT_AVERTISSEMENT = "EDIT_AVERTISSEMENT";
export const DELETE_AVERTISSEMENT = "DELETE_AVERTISSEMENT";

export const ListAvertissementModalView = {
  [ADD_AVERTISSEMENT]: {
    element: AddAvertissement,
  },
  [EDIT_AVERTISSEMENT]: {
    element: EditAvertissement,
  },
  [DELETE_AVERTISSEMENT]: {
    element: DeleteAvertissementView,
  },
};
