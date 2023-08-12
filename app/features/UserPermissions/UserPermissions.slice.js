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
      page: "Civil",
      path: "/mdt/encodage/civils",
      isCanAdd: true,
      isCanUpdate: false,
      isCanDelete: false,
    },
    {
      page: "Mon Compte",
      path: "/mon-compte",
      isCanAdd: true,
      isCanUpdate: true,
      isCanDelete: true,
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
