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
};

export default RootReducers;
