import Api from "../../../../../services/api/instance";

export const postSavePlainte = (body) => {
  return Api.post("/plaints", body);
};
