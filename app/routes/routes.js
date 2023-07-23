import React from "react";

import Pages from "./import";
import { Outlet, redirect } from "react-router-dom";
import ThemeLayout from "../components/Layout/ThemeLayout";
import { userRedirect } from "./helper";

const checkUserPermission = () => {};

export const routing = [
  {
    path: "/",
    element: <ThemeLayout />,
    loader: userRedirect,
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
    path: "enregistrement/:faction",
    element: <Pages.Register />,
  },
];
