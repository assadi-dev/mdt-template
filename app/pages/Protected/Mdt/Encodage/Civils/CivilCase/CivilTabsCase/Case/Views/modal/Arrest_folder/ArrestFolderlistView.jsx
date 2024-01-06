import React from "react";
import AddArrestFolderView from "./AddArrestFolderView";
import DeleteArrestFolder from "./DeleteArrestFolder";

export const ADD_ARREST_FOLDER = "ADD_ARREST_FOLDER";
export const SHOW_ARREST_FOLDER = "SHOW_ARREST_FOLDER";
export const EDIT_ARREST_FOLDER = "EDIT_ARREST_FOLDER";
export const DELETE_ARREST_FOLDER = "DELETE_ARREST_FOLDER";

export const ListAddArrestFolderModalView = {
  [ADD_ARREST_FOLDER]: {
    element: AddArrestFolderView,
  },
  [DELETE_ARREST_FOLDER]: {
    element: DeleteArrestFolder,
  },
};
