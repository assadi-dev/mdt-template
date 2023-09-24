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
/***END - Services***/
/***MDT***/
import EncodageCivils from "../pages/Protected/Mdt/Encodage/Civils";
import EncodageVehicules from "../pages/Protected/Mdt/Encodage/Vehicules";
import EncodageArmes from "../pages/Protected/Mdt/Encodage/Armes";
import PanicButton from "../pages/Protected/Mdt/PanicButton";
import Plainte from "../pages/Protected/Mdt/Rapport/Plainte";
import RapportRookie from "../pages/Protected/Mdt/Rapport/RapportRookie";
import RapportAspirant from "../pages/Protected/Mdt/Rapport/RapportAspirant";
import RapportIncident from "../pages/Protected/Mdt/Rapport/RapportIncident";
import RapportIntervention from "../pages/Protected/Mdt/Rapport/RapportIntervention";
import ConsultationRapportRookie from "../pages/Protected/Mdt/PoliceAcademy/ConsultationRapportRookie";
import ConsultationRapportAspirant from "../pages/Protected/Mdt/SheriffAcademy/ConsultationRapportAspirant";
/*** END - MDT***/
import AccesPermissions from "../pages/Protected/Administrations/AccesPermissions";
import Users from "../pages/Protected/Administrations/Users";

/** SUPERVISION / COMMAND STAFF */

import Comptabilite from "../pages/Protected/CommandStaffSupervisor/Comptabilite";
import Effectifs from "../pages/Protected/CommandStaffSupervisor/Effectifs";
import GestionDesComptes from "../pages/Protected/CommandStaffSupervisor/GestionDesComptes";
import AttributionArmes from "../pages/Protected/CommandStaffSupervisor/Attribution/AttributionArmes";
import AttributionVehicules from "../pages/Protected/CommandStaffSupervisor/Attribution/AttributionVehicules";

/** END - SUPERVISION / COMMAND STAFF */

/** GESTION RESSOURCE **/

import GestionCodePenal from "../pages/Protected/GestionRessources/GestionCodePenal";
import GestionGrades from "../pages/Protected/GestionRessources/GestionGrades";

/** END - GESTION RESSOURCE **/

/** END OF WATCH */

import EndOfWatch from "../pages/Protected/EndOfWatch";

/** END **/

/** OTHER***/
import Grades from "../pages/Protected/Grades";
import GradeCategories from "../pages/Protected/Grades/GrdesCategories";
/**END - OTHER***/

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
  RapportRookie,
  RapportAspirant,
  RapportIntervention,
  RapportIncident,
  ConsultationRapportRookie,
  ConsultationRapportAspirant,
  AccesPermissions,
  Grades,
  GradeCategories,
  Users,
  Comptabilite,
  Effectifs,
  GestionDesComptes,
  GestionCodePenal,
  GestionGrades,
  AttributionArmes,
  AttributionVehicules,
  EndOfWatch,
};
