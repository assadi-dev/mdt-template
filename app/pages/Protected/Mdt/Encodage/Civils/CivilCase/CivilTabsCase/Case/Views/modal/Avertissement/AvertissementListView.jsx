import React from "react";
import AddAvertissement from "./AddAvertissement";
import ShowAvertissement from "./ShowAvertissement";
import DeleteAvertissementView from "./DeleteAvertissementView";

export const ADD_AVERTISSEMENT = "add-avertissement";
export const SHOW_AVERTISSEMENT = "show-avertissement";
export const EDIT_AVERTISSEMENT = "edit-avertissement";
export const DELETE_AVERTISSEMENT = "delete-avertissement";

export const ListAvertissementModalView = {
  [ADD_AVERTISSEMENT]: {
    element: AddAvertissement,
  },
  [SHOW_AVERTISSEMENT]: {
    element: ShowAvertissement,
  },
  [DELETE_AVERTISSEMENT]: {
    element: DeleteAvertissementView,
  },
};
