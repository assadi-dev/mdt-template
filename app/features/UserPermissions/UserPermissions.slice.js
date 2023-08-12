import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access: [
    {
      page: "Accueil",
      path: "/",
      isCanAdd: true,
      isCanUpdate: false,
      isCanDelete: false,
    },
    {
      page: "MDT",
      childrens: "Encodage",
      path: "/mdt/encodage/civils",
      isCanAdd: false,
      isCanUpdate: false,
      isCanDelete: false,
    },
    {
      page: "MDT",
      childrens: "Encodages",
      path: "/mdt/encodage/armes",
      isCanAdd: true,
      isCanUpdate: false,
      isCanDelete: false,
    },
    {
      page: "MDT",
      childrens: "Panic Bouton",
      path: "/mdt/panic-bouton",
      isCanAdd: true,

      isCanUpdate: false,
      isCanDelete: false,
    },
    {
      page: "MDT",
      childrens: "Encodage",
      path: "/mdt/encodage/vehicules",
      isCanAdd: true,
      isCanUpdate: false,
      isCanDelete: false,
    },
    {
      page: "Services",
      childrens: "Feuilles d'heures",
      path: "/services/feuille-d-heures",
      isCanAdd: true,
      isCanUpdate: false,
      isCanDelete: false,
    },
    {
      page: "Administrations",
      childrens: "Acces/Permissions",
      path: "/administrations/acces-permissions",
      isCanAdd: true,
      isCanUpdate: false,
      isCanDelete: false,
    },
  ],
  status: "idle",
  error: "",
};

export const UserPermissionSlice = createSlice({
  name: "user_permission",
  initialState,
});

export default UserPermissionSlice.reducer;
