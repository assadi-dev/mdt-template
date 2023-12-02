import Api from "../../../../../services/api/instance";

export const postSavePlainte = (body) => {
  return Api.post("/plaints", body);
};

export const updateSavePlainte = (id, body) => {
  return Api.put(`/plaints/${id}`, body);
};
