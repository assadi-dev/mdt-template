import React from "react";
import PreviewComptabilite from "./PreviewComptabilite";

export const SHOW_DEMANDE_COMPTABILITE = "show-demandeComptability";

export const listOfView = {
  "show-demandeComptability": {
    element: PreviewComptabilite,
  },
};

/**MockData */

export const collections = [
  {
    id: 1,
    matricule: 209,
    agent: "Alyson Finley",
    objetDemande: "Remboursement Voiture GND",
    amount: 3006,
    demandeState: "pending",
    createdAt: "30/09/2023 à 15:00",
  },

  {
    id: 2,
    matricule: 209,
    agent: "Alyson Finley",
    objetDemande: "Remboursement Kevlar",
    amount: 1500,
    demandeState: "pending",
    createdAt: "30/09/2023 à 15:00",
  },
  {
    id: 3,
    matricule: 209,
    agent: "Alyson Finley",
    objetDemande: "Remboursement Voiture GND",
    amount: 3006,
    demandeState: "pending",
    createdAt: "30/09/2023 à 15:00",
  },
];
