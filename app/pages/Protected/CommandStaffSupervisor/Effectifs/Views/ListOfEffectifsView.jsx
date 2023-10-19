import React from "react";
import EditEffectifView from "./EditEffectifView";

export const EDIT_EFFECTIF = "edit_effectif";
export const DELETE_EFFECTIF = "delete_effectif";

export const listEffectifView = {
  edit_effectif: {
    element: EditEffectifView,
  },
  delete_effectif: {
    element: null,
  },
};

export const defaultFormValue = {
  id: null,
  photo: "",
  matricule: "",
  agent: "",
  firstname: "",
  lastname: "",
  phone: "",
  iban: "",
  grade: "",
  division: "",
};
