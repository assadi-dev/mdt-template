import Api from "../../../../services/api/instance";

export const getRoleUser = (role) => {
  if (role.includes("ROLE_ADMIN")) return "ROLE_ADMIN";
  else return "ROLE_USER";
};
