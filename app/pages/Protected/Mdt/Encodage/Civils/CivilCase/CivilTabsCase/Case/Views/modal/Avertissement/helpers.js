import Api from "../../../../../../../../../../../services/api/instance";

export const save_avertissement = (data) => {
  return Api.post(`/avertissements`, data);
};
export const update_avertissement = (id, data) => {
  return Api.put(`/avertissements/${id}`, data);
};
export const delete_avertissement = (id) => {
  return Api.delete(`/avertissements/${id}`);
};
