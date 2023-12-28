import Api from "../../../../../../services/api/instance";

export const save_codePenal = (data) => {
  return Api.post(`/code_penals`, data);
};
export const update_codePenal = (id, data) => {
  return Api.put(`/code_penals/${id}`, data);
};
export const delete_codePenal = (id) => {
  return Api.delete(`/code_penals/${id}`);
};
