import React from "react";

import Pages from "./bootstrap";
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
      { path: "mon-compte", element: <Pages.Compte /> },
      {
        path: "services",
        element: <Outlet />,
        children: [
          {
            path: "feuille-d-heures",
            element: <Pages.FeuilleDheures />,
          },
          {
            path: "trombinoscop",
            element: <Pages.Trombinoscop />,
          },
          {
            path: "plaintes",
            element: <Pages.Plaintes />,
          },
          {
            path: "demande-comptabilite",
            element: <Pages.DemandeComptaabilite />,
          },
          {
            path: "saisie",
            element: <Pages.Saisies />,
          },
          {
            path: "attribution-patrouilleur",
            element: <Pages.AttributionPatrouilleurs />,
          },
        ],
      },
      {
        path: "mdt",
        element: <Outlet />,
        children: [
          {
            path: "encodage",
            element: <Outlet />,
            children: [
              {
                path: "armes",
                element: <Pages.EncodageArmes />,
              },
              {
                path: "civils",
                element: <Pages.EncodageCivils />,
              },
              {
                path: "vehicules",
                element: <Pages.EncodageVehicules />,
              },
            ],
          },
          {
            path: "panic-bouton",
            element: <Pages.PanicButton />,
          },
          {
            path: "police-academy",
            children: [
              {
                path: "consultation-rapport-rookie",
                element: <Pages.ConsultationRapportRookie />,
              },
            ],
          },
          {
            path: "sheriff-academy",
            children: [
              {
                path: "consultation-rapport-aspirant",
                element: <Pages.ConsultationRapportAspirant />,
              },
            ],
          },
          {
            path: "rapport",
            element: <Outlet />,
            children: [
              {
                path: "plainte",
                element: <Pages.Plainte />,
              },
              {
                path: "rapport-aspirant",
                element: <Pages.RapportAspirant />,
              },
              {
                path: "rapport-incident",
                element: <Pages.RapportIncident />,
              },
            ],
          },
        ],
      },
      {
        path: "administrations",
        children: [
          {
            path: "acces-permissions",
            element: <Pages.AccesPermissions />,
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
