import Api from "../../../../../services/api/instance";

export const saveCivil = (body) => {
  return Api.post("/civils", body);
};
