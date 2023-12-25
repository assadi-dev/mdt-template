import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  photo: "",
  idDiscord: "",
  username: "",
  roles: ["ROLE_USER"],
  idAgent: "",
  firstname: "",
  lastname: "",
  matricule: "",
  phone: "",
  grade: "",
  division: "",
  isValidate: "",
  isLoggedIn: false,
  iban: "",
  division: "",
  error: "",
  gender: "",
  status: "idle",
  createdAt: "",
};

export const AuthenticateSlice = createSlice({
  name: "Authenticate",
  initialState,
  reducers: {
    hydrateUser: (state, action) => {
      const { payload } = action;
      state = { ...state, ...payload, isLoggedIn: true };
      return state;
    },
    updateUser: (state, action) => {
      const { payload } = action;
      state = { ...state, ...payload };
      return state;
    },
  },
});

export const { hydrateUser, updateUser } = AuthenticateSlice.actions;

export default AuthenticateSlice.reducer;
