import AuthenticateReducer from "./Authenticate/Athenticate.slice";
import UserPermissionsReducer from "./UserPermissions/UserPermissions.slice";
import GradeReducer from "./Grades/Grades.slice";
import GradeCategoriesReducer from "./GradeCategories/GradeCategories.slice";
import UsersReducer from "./Users/Users.slice";
import TrombinoscopReducer from "./Trombinoscop/Trombinoscop.slice";
import AccountingRequestByPageReducer from "./AccountingRequest/AccountingRequest.slice";
import ServiceWeaponEncodingReducer from "./ServiceWeaponEncoding/ServiceWeaponEncoding.slice";
import AcquisitionsReducer from "./Acquisitions/Acquisitions.slice";
import CivilsReducer from "./Civils/Civils.slice";
import VehicleEncodingReducer from "./VehicleEncoding/VehicleEncoding.slice";
import WeaponEncodingReducer from "./WeaponEncoding/WeaponEncoding.slice";
import PlaintsReducer from "./Plaints/Plaints.slice";
import IncidentReportReducer from "./IncidentReport/IncidentReport.slice";
import InterventionReportReducer from "./interventionReport/InterventionReport.slice";
import RookieReportReducer from "./RookieReport/RookieReport.slice";
import GunFightReportReducer from "./GunFightReport/GunFightReport.slice";
import EffectifsReducer from "./Effectifs/Effectifs.slice";
import SanctionReducer from "./Sanctions/Sanctions.slice";
import VehicleAttributionReducer from "./VehicleAttribution/VehicleAttribution.slice";
import CodePenalReducer from "./CodePenals/CodPenal.slice";
import EndOfWatchApiReducer, {
  endOfWatchApi,
} from "./EndOFWatch/EndOfWatchApi";
import EndOfWatchReducer from "./EndOFWatch/EndOfWatch.slice";
import { sanctionApi } from "./Sanctions/SanctionApi";
import { serviceWeaponApi } from "./ServiceWeaponEncoding/ServiceWeaponEncodingApi";
import { vehicleAttributionApi } from "./VehicleAttribution/VehicleAttributionApi";
import { codePenalApi } from "./CodePenals/CodePenalApi";
import AvertissementReducer from "./Civils/Reports/AvertissementSlice";
import TrafficReducer from "./Civils/Reports/TrafficSlice";
import ArrestReportReducer from "./Civils/Reports/ArrestReport.slice";
import ArrestFolderReducer from "./Civils/Reports/ArrestFolder.slice";

const RootReducers = {
  AuthenticateReducer,
  UserPermissionsReducer,
  GradeReducer,
  GradeCategoriesReducer,
  UsersReducer,
  TrombinoscopReducer,
  AccountingRequestByPageReducer,
  ServiceWeaponEncodingReducer,
  AcquisitionsReducer,
  CivilsReducer,
  WeaponEncodingReducer,
  VehicleEncodingReducer,
  PlaintsReducer,
  IncidentReportReducer,
  InterventionReportReducer,
  RookieReportReducer,
  GunFightReportReducer,
  EffectifsReducer,
  SanctionReducer,
  VehicleAttributionReducer,
  CodePenalReducer,
  EndOfWatchReducer,
  //RTK query
  [endOfWatchApi.reducerPath]: endOfWatchApi.reducer,
  [sanctionApi.reducerPath]: sanctionApi.reducer,
  [serviceWeaponApi.reducerPath]: serviceWeaponApi.reducer,
  [vehicleAttributionApi.reducerPath]: vehicleAttributionApi.reducer,
  [codePenalApi.reducerPath]: codePenalApi.reducer,
  //Casier Civil
  AvertissementReducer,
  TrafficReducer,
  ArrestReportReducer,
  ArrestFolderReducer,

  //Casier civil
};

export default RootReducers;
