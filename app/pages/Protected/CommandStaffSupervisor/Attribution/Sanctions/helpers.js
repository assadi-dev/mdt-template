import api from "../../../../../services/api/instance";
export const superviseurCategoryList = ["Supervisor", "Command staff"];
export const officierCategory = ["State officier"];
export const saspOfficer = [...officierCategory, ...superviseurCategoryList];

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

export const update_sanction = (id, data) => {
  return api.put(`/sanctions/${id}`, data);
};

export const delete_sanction = (id) => {
  return api.delete(`/sanctions/${id}`);
};
