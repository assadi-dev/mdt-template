import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  photo: "",
  idDiscord: "",
  username: "",
  roles: ["ROLE_USER"],
  idAgent: "",
  firstname: "",
  name: "",
  matricule: "",
  phone: "",
  grade: "",
  division: "",
  isValidate: "",
  isLoggedIn: false,
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
      //console.log(state);
      return state;
    },
  },
});

export const { hydrateUser } = AuthenticateSlice.actions;

export default AuthenticateSlice.reducer;
