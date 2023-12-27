import api from "../../../../../services/api/instance";
export const superviseurCategoryList = ["Supervisor", "Command staff"];
export const officierCategory = ["State officier"];

export const listDecisionMakerToString = (decissionMakers) => {
  try {
    return [...decissionMakers].join(", ");
  } catch (error) {
    throw new Error(
      "decissionMakers doit etre un tableau de chaine de caractere "
    );
  }
};

export const save_sanction = (data) => {
  return api.post(`/sanctions`, data);
};
