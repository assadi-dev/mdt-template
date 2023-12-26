import AddSanctionView from "./Form/AddSanctionView";
import DeleteSanctionView from "./Form/DeleteSanctionView";
import EditSanctionView from "./Form/EditSanctionView";
import PreviewSanctionView from "./Form/PreviewSanctionView";

export const SHOW_ATTRIBUTION_SANCTION = "show-attributionSanction";
export const ADD_ATTRIBUTION_SANCTION = "add-attributionSanction";
export const EDIT_ATTRIBUTION_SANCTION = "edit-attributionSanction";
export const DELETE_ATTRIBUTION_SANCTION = "delete-attributionSanction";

export const listOfViewSanction = {
  "show-attributionSanction": { element: PreviewSanctionView },
  "add-attributionSanction": { element: AddSanctionView },
  "edit-attributionSanction": { element: EditSanctionView },
  "delete-attributionSanction": { element: DeleteSanctionView },
};

export const collections = [
  {
    id: 1,
    agent: "jackson Marshall",
    decideur: "Alyson Finley",
    raison: "Uriner dans la voie publique",
    createdAt: "08/10/2023",
    agentConcerne: "jackson Marshall",
    typeSanction: "Blame",
  },
];
