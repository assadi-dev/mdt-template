import React from "react";

import EditRapportIncident from "./Form/EditRapportIncident";
import PreviewRapportIncident from "./Form/PreviewRapportIncident";
import DeleteRapportIncident from "./Form/DeleteRapportIncident";
import AddRapportIncident from "./Form/AddRapportincIdent";

export const ADD_RAPPORT_INCIDENT = "add-rapportIncident";
export const EDIT_RAPPORT_INCIDENT = "edit-rapportIncident";
export const DELETE_RAPPORT_INCIDENT = "delete-rapportIncident";
export const SHOW_RAPPORT_INCIDENT = "show-rapportIncident";

export const listOfRapportIncidentView = {
  "add-rapportIncident": {
    element: AddRapportIncident,
  },
  "edit-rapportIncident": { element: EditRapportIncident },
  "delete-rapportIncident": { element: DeleteRapportIncident },
  "show-rapportIncident": { element: PreviewRapportIncident },
};
