import { Outlet, redirect } from "react-router-dom";

export const userRedirect = () => {
  console.log(usercredential);

  if (!usercredential.hasOwnProperty("idDiscord")) return redirect("/factions");

  if (!usercredential.hasOwnProperty("agent")) return redirect("/inscription");

  return <Outlet />;
};
