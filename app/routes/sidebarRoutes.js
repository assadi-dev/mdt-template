export const sidebarRoutes = [
  {
    name: "Accueil",
    path: "/",
  },
  {
    name: "Services",
    childrens: [
      {
        name: "Feuilles d'heures",
        path: "/services/feuille-d-heures",
      },
      {
        name: "Trombinoscop",
        path: "/services/trombinoscop",
      },
      {
        name: "Demande comptabilité",
        path: "/services/demande-comptabilite",
      },
      {
        name: "Saisies",
        path: "/services/saisie",
      },
      {
        name: "Attribution patrouilleur",
        path: "/services/attribution-patrouilleur",
      },
    ],
  },
  {
    name: "MDT",
    childrens: [
      {
        name: "Encodage",
        childrens: [
          { name: "Armes", path: "/mdt/encodage/armes" },
          { name: "Civils", path: "/mdt/encodage/civils" },
          { name: "Véhicules", path: "/mdt/encodage/vehicules" },
        ],
      },
      {
        name: "Panic Bouton",
        path: "/mdt/panic-bouton",
      },
      {
        name: "Police Accademy",
        childrens: [
          {
            name: "Consultation Rapport Rookie",
            path: "/mdt/police-academy/consultation-rapport-rookie",
          },
        ],
      },
      {
        name: "Sheriff Accademy",
        childrens: [
          {
            name: "Consultation Rapport Aspirant",
            path: "/mdt/sheriff-academy/consultation-rapport-aspirant",
          },
        ],
      },
      {
        name: "Rapport",
        childrens: [
          {
            name: "Plainte",
            path: "/mdt/rapport/plainte",
          },
          {
            name: "Rapport Aspirant",
            path: "/mdt/rapport/rapport-aspirant",
          },
          {
            name: "Rapport Incident",
            path: "/mdt/rapport/rapport-incident",
          },
        ],
      },
    ],
  },

  {
    name: "Supervision / Command staff",
    childrens: [],
  },
  {
    name: "Supervision / EM",
    childrens: [],
  },
  {
    name: "Gestion des ressources",
    childrens: [],
  },
  {
    name: "Administrations",
    childrens: [
      {
        name: "Acces/Permissions",
        path: "administrations/acces-permissions",
      },
    ],
  },
];
