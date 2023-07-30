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
    ],
  },
];
