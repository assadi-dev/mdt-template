import AuthenticateReducer from "./Authenticate/Athenticate.slice";
import UserPermissionsReducer from "./UserPermissions/UserPermissions.slice";
import GradeReducer from "./Grades/Grades.slice";
import GradeCategoriesReducer from "./GradeCategories/GradeCategories.slice";
import UsersReducer from "./Users/Users.slice";
import TrombinoscopReducer from "./Trombinoscop/Trombinoscop.slice";
import AccountingRequestByPageReducer from "./AccountingRequest/AccountingRequest.slice";
import ServiceWeaponEncodingReducer from "./ServiceWeaponEncoding/ServiceWeaponEncoding.slice";
import AcquisitionsReducer from "./Acquisitions/Acquisitions.slice";

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
};

export default RootReducers;
