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
import EncodageArmeFonction from "../pages/Protected/Services/EncodageArmeFonction";
/***END - Services***/
/***MDT***/
import EncodageCivils from "../pages/Protected/Mdt/Encodage/Civils";
import CivilCase from "../pages/Protected/Mdt/Encodage/Civils/CivilCase";
import EncodageVehicules from "../pages/Protected/Mdt/Encodage/Vehicules";
import EncodageArmes from "../pages/Protected/Mdt/Encodage/Armes";
import PanicButton from "../pages/Protected/Mdt/PanicButton";
import Plainte from "../pages/Protected/Mdt/Rapport/Plainte";
import RapportRookie from "../pages/Protected/Mdt/Rapport/RapportRookie";
import RapportAspirant from "../pages/Protected/Mdt/Rapport/RapportAspirant";
import RapportIncident from "../pages/Protected/Mdt/Rapport/RapportIncident";
import Fusillade from "../pages/Protected/Mdt/Rapport/Fusillade";
import RapportIntervention from "../pages/Protected/Mdt/Rapport/RapportIntervention";
import ConsultationRapportRookie from "../pages/Protected/Mdt/PoliceAcademy/ConsultationRapportRookie";
import ConsultationRapportAspirant from "../pages/Protected/Mdt/SheriffAcademy/ConsultationRapportAspirant";
/*** END - MDT***/

/** Civil Case **/

import TabAvertissement from "../../app/pages/Protected/Mdt/Encodage/Civils/CivilCase/CivilTabsCase/Case/TabAvertissement";
import TabTraffic from "../../app/pages/Protected/Mdt/Encodage/Civils/CivilCase/CivilTabsCase/Case/TabTraffic";
import TabDossierArrestation from "../../app/pages/Protected/Mdt/Encodage/Civils/CivilCase/CivilTabsCase/Case/TabDossierArrestation";
import TabRapportArrestation from "../../app/pages/Protected/Mdt/Encodage/Civils/CivilCase/CivilTabsCase/Case/TabRapportArrestation";

/**END **/

import AccesPermissions from "../pages/Protected/Administrations/AccesPermissions";
import Users from "../pages/Protected/Administrations/Users";

/** SUPERVISION / COMMAND STAFF */

import Comptabilite from "../pages/Protected/CommandStaffSupervisor/Comptabilite";
import Effectifs from "../pages/Protected/CommandStaffSupervisor/Effectifs";
import GestionDesComptes from "../pages/Protected/CommandStaffSupervisor/GestionDesComptes";
import AttributionArmes from "../pages/Protected/CommandStaffSupervisor/Attribution/AttributionArmes";
import AttributionVehicules from "../pages/Protected/CommandStaffSupervisor/Attribution/AttributionVehicules";
import AttributionSanctions from "../pages/Protected/CommandStaffSupervisor/Attribution/Sanctions";

/** END - SUPERVISION / COMMAND STAFF */

/** GESTION RESSOURCE **/

import GestionCodePenal from "../pages/Protected/GestionRessources/GestionCodePenal";
import GestionGrades from "../pages/Protected/GestionRessources/GestionGrades";
import GestionDivision from "../pages/Protected/GestionRessources/GestionDivision";

/** END - GESTION RESSOURCE **/

/** END OF WATCH */
import EndOfWatch from "../pages/Protected/EndOfWatch";
/** END **/

/** OTHER***/
import Grades from "../pages/Protected/Grades";
import GradeCategories from "../pages/Protected/Grades/GrdesCategories";
/**END - OTHER***/

/** COMPTE */
import InfoPersonel from "../pages/Protected/Compte/Tabs/TabContent/InfoPersonnel/InfoPersonel";
import PermisPPA from "../pages/Protected/Compte/Tabs/TabContent/PermisPPA";
import ArmesVehiculeAttribution from "../pages/Protected/Compte/Tabs/TabContent/Attributions/ArmesVehiculeAttribution";
import SanctionAgent from "../pages/Protected/Compte/Tabs/TabContent/SanctionAgent/SanctionAgent";
import Formations from "../pages/Protected/Compte/Tabs/TabContent/Formations/Formations";

/** END **/

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
  EncodageArmeFonction,
  EncodageCivils,
  CivilCase,
  TabAvertissement,
  TabTraffic,
  TabRapportArrestation,
  TabDossierArrestation,
  EncodageVehicules,
  EncodageArmes,
  PanicButton,
  Plainte,
  RapportRookie,
  RapportAspirant,
  RapportIntervention,
  RapportIncident,
  Fusillade,
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
  GestionDivision,
  AttributionArmes,
  AttributionVehicules,
  AttributionSanctions,
  EndOfWatch,
  InfoPersonel,
  PermisPPA,
  Formations,
  SanctionAgent,
  ArmesVehiculeAttribution,
};
