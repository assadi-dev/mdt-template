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
        name: "Encodage arme de fonction",
        path: "/services/encodage-arme-de-fonction",
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
          {
            name: "Véhicules",
            path: "/mdt/encodage/vehicules",
          },
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
        name: "Plainte",
        path: "/mdt/rapport/plainte",
      },
      {
        name: "Rapport",
        childrens: [
          {
            name: "Rapport Rookie",
            path: "/mdt/rapport/rapport-rookie",
          },
          {
            name: "Rapport Incident",
            path: "/mdt/rapport/rapport-incident",
          },
          {
            name: "Rapport Intervention",
            path: "/mdt/rapport/rapport-intervention",
          },
          {
            name: "Dossier Fusillade",
            path: "/mdt/rapport/dossier-fusillade",
          },
        ],
      },
    ],
  },

  {
    name: "Supervision / Command staff",
    childrens: [
      {
        name: "Comptabilité",
        path: "/supervision-command-staff/comptabilite",
      },
      {
        name: "Effectifs",
        path: "/supervision-command-staff/effectifs",
      },
      {
        name: "Gestion des comptes",
        path: "/supervision-command-staff/gestion-des-comptes",
      },
      {
        name: "Attribution des sanctions",
        path: "/supervision-command-staff/attribution-des-sanctions",
      },
      {
        name: "Attribution d'armes",
        path: "/supervision-command-staff/attribution-des-armes",
      },
      {
        name: "Attribution des vehicules",
        path: "/supervision-command-staff/attribution-des-vehicules",
      },
    ],
  },
  {
    name: "Gestion des ressources",
    childrens: [
      {
        name: "Gestion code penals",
        path: "/gestion-des-ressources/gestion-code-penal",
      },
      {
        name: "Gestion des grades",
        path: "/gestion-des-ressources/gestion-grade/grades",
      },
      {
        name: "Gestion des divisions",
        path: "/gestion-des-ressources/gestion-division",
      },
    ],
  },
  {
    name: "End of Watch",
    path: "/end-of-watch",
  },
  {
    name: "Administrations",
    childrens: [
      {
        name: "Acces/Permissions",
        path: "/administrations/acces-permissions",
      },
      {
        name: "Grades",
        path: "/administrations/grades",
      },
      {
        name: "Utilisateurs",
        path: "/administrations/utilisateurs",
      },
    ],
  },
];
