import React from "react";

import Pages from "./bootstrap";
import { Outlet, redirect } from "react-router-dom";
import ThemeLayout from "../components/Layout/ThemeLayout";
import { checkUserPermission, userRedirect } from "./helper";
import GradesLayout from "../pages/Protected/Grades/GradesLayout";

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
        path: "mon-compte",
        element: <Pages.Compte />,
        children: [
          {
            path: "info-personel",
            element: <Pages.InfoPersonel />,
          },
          {
            path: "permis-ppa",
            element: <Pages.ArmesVehiculeAttribue />,
          },
          {
            path: "armes-vehicule-attribue",
            element: <Pages.PermisPPA />,
          },
          {
            path: "sanction",
            element: <Pages.SanctionAgent />,
          },
        ],
      },
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
            path: "encodage-arme-de-fonction",
            element: <Pages.EncodageArmeFonction />,
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
                path: "civil/:idCivil",
                element: <Pages.CivilCase />,

                children: [
                  {
                    path: "avertissement",
                    element: <Pages.TabAvertissement />,
                  },
                  {
                    path: "traffic",
                    element: <Pages.TabTraffic />,
                  },
                  {
                    path: "rapport-d-arrestation",
                    element: <Pages.TabRapportArrestation />,
                  },
                  {
                    path: "dossier-d-arrestations",
                    element: <Pages.TabDossierArrestation />,
                  },
                ],
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
                path: "rapport-rookie",
                element: <Pages.RapportRookie />,
              },
              {
                path: "rapport-incident",
                element: <Pages.RapportIncident />,
              },
              {
                path: "rapport-intervention",
                element: <Pages.RapportIntervention />,
              },
            ],
          },
        ],
      },
      {
        path: "supervision-command-staff",
        element: <Outlet />,
        children: [
          {
            path: "comptabilite",
            element: <Pages.Comptabilite />,
          },
          {
            path: "effectifs",
            element: <Pages.Effectifs />,
          },
          {
            path: "gestion-des-comptes",
            element: <Pages.GestionDesComptes />,
          },
          {
            path: "attribution-des-armes",
            element: <Pages.AttributionArmes />,
          },
          {
            path: "attribution-des-vehicules",
            element: <Pages.AttributionVehicules />,
          },
        ],
      },
      {
        path: "gestion-des-ressources",
        element: <Outlet />,
        children: [
          { path: "gestion-code-penal", element: <Pages.GestionCodePenal /> },
          { path: "gestion-grade", element: <Pages.GestionGrades /> },
        ],
      },
      {
        path: "end-of-watch",
        element: <Pages.EndOfWatch />,
      },
      {
        path: "administrations",
        children: [
          {
            path: "acces-permissions",
            element: <Pages.AccesPermissions />,
          },
          {
            path: "grades",
            element: <GradesLayout />,
            children: [
              {
                index: true,
                element: <Pages.Grades />,
              },
              {
                path: "categories",
                element: <Pages.GradeCategories />,
              },
            ],
          },
          {
            path: "utilisateurs",
            element: <Pages.Users />,
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
