import React from "react";
import AddCodePenal from "./Form/AddCodePenal";
import EditCodePenal from "./Form/EditCodePenal";
import DeleCodepenal from "./Form/DeleCodepenal";

export const ADD_CODE_PENAL = "add_code_penal";
export const EDIT_CODE_PENAL = "edit_code_penal";
export const DELETE_CODE_PENAL = "delete_code_penal";

export const LIST_OF_VIEWs_CODE_PENAL = {
  add_code_penal: {
    element: AddCodePenal,
  },
  edit_code_penal: {
    element: EditCodePenal,
  },
  delete_code_penal: {
    element: DeleCodepenal,
  },
};
