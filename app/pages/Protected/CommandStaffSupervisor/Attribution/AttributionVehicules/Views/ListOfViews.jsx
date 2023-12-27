import AddAttributionVehiculeView from "./AddAttributionVehiculeView";
import DeleteAttributionVehiculeView from "./DeleteAttributionVehiculeView";
import EditAttributionVehiculeView from "./EditAttributionVehiculeView";

export const SHOW_ATTRIBUTION_VEHICULE = "show-attributionVehicule";
export const ADD_ATTRIBUTION_VEHICULE = "add-attributionVehicule";
export const EDIT_ATTRIBUTION_VEHICULE = "edit-attributionVehicule";
export const DELETE_ATTRIBUTION_VEHICULE = "delete-attributionVehicule";

export const listOfAttributionVehicule = {
  "show-attributionVehicule": { element: null },
  "add-attributionVehicule": { element: AddAttributionVehiculeView },
  "edit-attributionVehicule": { element: EditAttributionVehiculeView },
  "delete-attributionVehicule": { element: DeleteAttributionVehiculeView },
};

export const formAtrributionVehicule = {
  matricule: "",
  agent: "",
  grade: "",
  typeVehicule: "",
  plaqueVehicule: "",
  idVehicule: "",
};
