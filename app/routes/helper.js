import React from "react";
import { Outlet, redirect } from "react-router-dom";
import { TOKEN_STORAGE_NAME, USER_DATA_STORAGE } from "../config/constantes";

export const userRedirect = () => {
  // console.log(usercredential);
  if (
    !usercredential.hasOwnProperty("idDiscord") &&
    localStorage.getItem(`${TOKEN_STORAGE_NAME}-remember-me`)
  ) {
    const { agentIdentity, faction } = JSON.parse(
      localStorage.getItem(USER_DATA_STORAGE)
    );
    return redirect(`/connexion/${faction}`);
  }
  if (!usercredential.hasOwnProperty("idDiscord")) return redirect("/factions");
  if (localStorage.getItem(USER_DATA_STORAGE)) {
    const { faction } = JSON.parse(localStorage.getItem(USER_DATA_STORAGE));
    if (usercredential.hasOwnProperty("idAgent") && !usercredential.idAgent)
      return redirect(`/enregistrement/${faction}`);
  }

  if (usercredential.hasOwnProperty("idDiscord")) {
    let agentIdentity = `${usercredential.firstname} ${usercredential.lastname}`;
    let faction = `${usercredential.faction}`;
    localStorage.setItem(
      USER_DATA_STORAGE,
      JSON.stringify({ agentIdentity, faction })
    );
  }
  if (!localStorage.getItem(`${TOKEN_STORAGE_NAME}-remember-me`))
    localStorage.removeItem(USER_DATA_STORAGE);

  return <Outlet />;
};

export const checkUserPermission = () => {
  if (localStorage.getItem(USER_DATA_STORAGE)) {
    localStorage.removeItem(USER_DATA_STORAGE);
  }
  return <Outlet />;
};
