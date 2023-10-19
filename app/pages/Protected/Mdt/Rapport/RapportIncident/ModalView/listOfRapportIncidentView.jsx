import React from "react";
import AddRapportincident from "./Form/AddRapportIncident";
import EditRapportIncident from "./Form/EditRapportIncident";
import { FormContainer } from "../../../../../../components/Forms/FormView.styled";
import PreviewRapportIncident from "./Form/PreviewRapportIncident";
import DeleteRapportincident from "./Form/DeleteRapportIncident";

export const ADD_RAPPORT_INCIDENT = "add-rapportIncident";
export const EDIT_RAPPORT_INCIDENT = "edit-rapportIncident";
export const DELETE_RAPPORT_INCIDENT = "delete-rapportIncident";
export const SHOW_RAPPORT_INCIDENT = "show-rapportIncident";

export const listOfRapportIncidentView = {
  "add-rapportIncident": {
    element: AddRapportincident,
  },
  "edit-rapportIncident": { element: EditRapportIncident },
  "delete-rapportIncident": { element: DeleteRapportincident },
  "show-rapportIncident": { element: PreviewRapportIncident },
};
