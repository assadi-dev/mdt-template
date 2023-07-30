import React from "react";
import SelectFaction from "../pages/SelectFaction";
import Connexion from "../pages/Connexion";
import Home from "../pages/Protected/Home";
import AuthLayout from "../components/Layout/AuthLayout";
import Register from "../pages/Register";
import Compte from "../pages/Protected/Compte";
/***Services***/
import FeuilleDheures from "../pages/Protected/Services/FeuilleDheures";
import Trombinoscop from "../pages/Protected/Services/Trombinoscop";
import DemandeComptaabilite from "../pages/Protected/Services/DemandesComptabilite";
import Plaintes from "../pages/Protected/Services/Plaintes";
import Saisies from "../pages/Protected/Services/Saisies";
import AttributionPatrouilleurs from "../pages/Protected/Services/AttributionPatrouilleurs";
/***Services***/
/***MDT**/
import EncodageCivils from "../pages/Protected/Mdt/Encodage/Civils";
import EncodageVehicules from "../pages/Protected/mdt/Encodage/Vehicules";
import EncodageArmes from "../pages/Protected/mdt/Encodage/Armes";
import PanicButton from "../pages/Protected/mdt/PanicButton";
/***MDT**/

export default {
  AuthLayout,
  SelectFaction,
  Connexion,
  Register,
  Home,
  Compte,
  FeuilleDheures,
  Trombinoscop,
  DemandeComptaabilite,
  Plaintes,
  Saisies,
  AttributionPatrouilleurs,
  EncodageCivils,
  EncodageVehicules,
  EncodageArmes,
  PanicButton,
};
