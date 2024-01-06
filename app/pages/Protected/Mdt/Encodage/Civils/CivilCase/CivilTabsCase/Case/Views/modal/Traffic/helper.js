import Api from "../../../../../../../../../../../services/api/instance";

export const save_traffic = (data) => {
  return Api.post(`/traffic`, data);
};
export const update_traffic = (id, data) => {
  return Api.put(`/traffic/${id}`, data);
};
export const delete_traffic = (id) => {
  return Api.delete(`/traffic/${id}`);
};
