import React from "react";
import { Outlet, redirect } from "react-router-dom";
import { USER_DATA_STORAGE } from "../config/constantes";

export const userRedirect = () => {
  console.log(usercredential);

  if (!usercredential.hasOwnProperty("idDiscord")) return redirect("/factions");
  if (localStorage.getItem(USER_DATA_STORAGE)) {
    const { faction } = JSON.parse(localStorage.getItem(USER_DATA_STORAGE));
    if (usercredential.hasOwnProperty("idAgent") && !usercredential.idAgent)
      return redirect(`/enregistrement/${faction}`);
  }

  return <Outlet />;
};

export const checkUserPermission = () => {
  if (localStorage.getItem(USER_DATA_STORAGE)) {
    localStorage.removeItem(USER_DATA_STORAGE);
  }
  return <Outlet />;
};
