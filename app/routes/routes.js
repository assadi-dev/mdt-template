import React from "react";

import Pages from "./import";
import { Outlet, redirect } from "react-router-dom";
import ThemeLayout from "../components/Layout/ThemeLayout";

const ChechUserAuth = () => {
  console.log(usercredential);

  if (!usercredential.hasOwnProperty("idDiscord")) return redirect("/factions");

  return <Outlet />;
};

const checkUserPermission = () => {};

export const routing = [
  {
    path: "/",
    element: <ThemeLayout />,
    loader: ChechUserAuth,
    children: [
      {
        index: true,
        element: <Pages.Home />,
      },
    ],
  },
  {
    path: "factions",
    element: <Pages.SelectFaction />,
  },
  {
    path: "connexion/:faction",
    element: <Pages.Connexion />,
  },
  {
    path: "inscription",
    element: <Pages.SelectFaction />,
  },
];
