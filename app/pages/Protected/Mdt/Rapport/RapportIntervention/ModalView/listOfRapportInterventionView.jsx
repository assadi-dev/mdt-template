import React from "react";
import AddRapportIntervention from "./Form/AddRapportIntervention";
import EditRapportIntervention from "./Form/EditRapportIntervention";
import DeleteRapportIntervention from "./Form/DeleteRapportIntervention";
import PreviewRapportIntervention from "./Form/PreviewRapportIntervention";

export const ADD_RAPPORT_INTERVENTION = "add-rapportIntervention";
export const EDIT_RAPPORT_INTERVENTION = "edit-rapportIntervention";
export const DELETE_RAPPORT_INTERVENTION = "delete-rapportIntervention";
export const SHOW_RAPPORT_INTERVENTION = "show-rapportIntervention";

export const listOfRapportInterventionView = {
  "add-rapportIntervention": {
    element: AddRapportIntervention,
  },
  "edit-rapportIntervention": {
    element: EditRapportIntervention,
  },
  "delete-rapportIntervention": {
    element: DeleteRapportIntervention,
  },
  "show-rapportIntervention": {
    element: PreviewRapportIntervention,
  },
};
