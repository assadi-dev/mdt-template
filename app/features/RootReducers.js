import AuthenticateReducer from "./Authenticate/Athenticate.slice";
import UserPermissionsReducer from "./UserPermissions/UserPermissions.slice";
import GradeReducer from "./Grades/Grades.slice";
import GradeCategoriesReducer from "./GradeCategories/GradeCategories.slice";
import UsersReducer from "./Users/Users.slice";

const RootReducers = {
  AuthenticateReducer,
  UserPermissionsReducer,
  GradeReducer,
  GradeCategoriesReducer,
  UsersReducer,
};

export default RootReducers;
