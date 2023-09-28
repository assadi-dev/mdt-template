import { createAsyncThunk } from "@reduxjs/toolkit";
import { UploadPhotoOwner, editAccount, get_owner } from "./AuthenticateAPI";

// Action sur l'Authentification et met a jour le reducer de maniere asynchrone

export const getOwnerdAsync = createAsyncThunk(
  "Authenticate/getOwner",
  async (payload, { signal }) => {
    try {
      const res = await get_owner(payload.id, signal);
      let role = res.data.roles.join("-");
      let id = res.data.id;
      let username = res.data.username;
      let photo = res.data.agent.photo;
      let matricule = res.data.agent.matricule
        ? res.data.agent.matricule
        : "N/A";
      let grade = res.data.agent.grade;
      let telephone = res.data.agent.telephone;
      let idAgent = res.data.agent.id;
      let createdAt = res.data.createdAt;
      let lastname = res.data.agent.lastname;

      return {
        id,
        role,
        username,
        photo,
        matricule,
        grade,
        telephone,
        idAgent,
        lastname,
        createdAt,
      };
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.error;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const editAccountAsync = createAsyncThunk(
  "Authenticate/editAccount",
  async (payload) => {
    const { id, data } = payload;
    try {
      const response = await editAccount(id, data);
      return response.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        error.response.data.violations
          ? (message = error.response.data.violations[0].message)
          : error.response.data.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);
