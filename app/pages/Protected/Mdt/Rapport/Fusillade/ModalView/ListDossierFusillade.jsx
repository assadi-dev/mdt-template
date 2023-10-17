import AddDossierFusillade from "./Form/AddDossierFusillade";
import DeleteDossierFusillade from "./Form/DeleteDossierFusillade";

export const ADD_DOSSIER_FUSILLADE = "add_doosier_fusillade";

export const EDIT_DOSSIER_FUSILLADE = "edit_doosier_fusillade";

export const DELETE_DOSSIER_FUSILLADE = "delete_doosier_fusillade";

export const PREVIEW_DOSSIER_FUSILLADE = "show_doosier_fusillade";

export const listOfDossierFusilladeView = {
  add_doosier_fusillade: { element: AddDossierFusillade },
  edit_doosier_fusillade: { element: null },
  delete_doosier_fusillade: { element: DeleteDossierFusillade },
  show_doosier_fusillade: { element: null },
};
