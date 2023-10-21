import React from "react";
import EditEffectifView from "./EditEffectifView";
import DeleteEffectifView from "./DeleteEffectifView";

export const EDIT_EFFECTIF = "edit_effectif";
export const DELETE_EFFECTIF = "delete_effectif";

export const listEffectifView = {
  edit_effectif: {
    element: EditEffectifView,
  },
  delete_effectif: {
    element: DeleteEffectifView,
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

export const Tabsheader = ["Info", "Formations", "End of watch"];
