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
/***MDT***/
import EncodageCivils from "../pages/Protected/Mdt/Encodage/Civils";
import EncodageVehicules from "../pages/Protected/Mdt/Encodage/Vehicules";
import EncodageArmes from "../pages/Protected/Mdt/Encodage/Armes";
import PanicButton from "../pages/Protected/Mdt/PanicButton";
import Plainte from "../pages/Protected/Mdt/Rapport/Plainte";
import RapportAspirant from "../pages/Protected/Mdt/Rapport/RapportAspirant";
import RapportIncident from "../pages/Protected/Mdt/Rapport/RapportIncident";
import ConsultationRapportRookie from "../pages/Protected/Mdt/PoliceAcademy/ConsultationRapportRookie";
import ConsultationRapportAspirant from "../pages/Protected/Mdt/SheriffAcademy/ConsultationRapportAspirant";
/***MDT***/
import AccesPermissions from "../pages/Protected/Administrations/AccesPermissions";

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
  Plainte,
  RapportAspirant,
  RapportIncident,
  ConsultationRapportRookie,
  ConsultationRapportAspirant,
  AccesPermissions,
};
