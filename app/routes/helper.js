import React from "react";
import { Outlet, redirect } from "react-router-dom";
import { USER_DATA_STORAGE } from "../config/constantes";

export const userRedirect = () => {
  console.log(usercredential);

  if (!usercredential.hasOwnProperty("idDiscord")) return redirect("/factions");

  const { faction } = JSON.parse(localStorage.getItem(USER_DATA_STORAGE));

  if (usercredential.hasOwnProperty("agent") && !usercredential.agent)
    return redirect(`/enregistrement/${faction}`);

  return <Outlet />;
};
