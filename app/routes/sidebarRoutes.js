export const sidebarRoutes = [
  {
    name: "Accueil",
    path: "/",
  },
  {
    name: "Services",
    childrens: [
      {
        name: "Dispatch",
        path: "/services/dispatch",
      },
      {
        name: "Feuilles d'heures",
        path: "/services/feuille-d-heures",
      },
    ],
  },
  {
    name: "MDT",
    childrens: [
      {
        name: "Civils",
        path: "/mdt/civil",
      },
    ],
  },
];
