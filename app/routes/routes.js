import React from "react";

import Pages from "./import";
import { Outlet, redirect } from "react-router-dom";
import ThemeLayout from "../components/Layout/ThemeLayout";
import { checkUserPermission, userRedirect } from "./helper";

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
      {
        path: "services",
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            path: "dispatch",
            element: (
              <>
                <h1>Dispatch</h1>
              </>
            ),
          },
        ],
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
