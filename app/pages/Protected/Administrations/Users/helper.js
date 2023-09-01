import Api from "../../../../services/api/instance";
import { firsLetterCapitalise } from "../../../../services/utils/textUtils";

export const getRoleUser = (role) => {
  if (role.includes("ROLE_ADMIN")) return "ROLE_ADMIN";
  else return "ROLE_USER";
};

export const cleanNameAgent = (firstname, lastname) => {
  firstname = firstname ? firstname : "";
  lastname = lastname ? lastname : "";

  let fullname = `${firsLetterCapitalise(firstname)} ${firsLetterCapitalise(
    lastname
  )}`;
  return fullname;
};
