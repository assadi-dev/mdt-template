import Api from "../../../../../../../../../../../services/api/instance";

export const save_arrest_folder = (data) => {
  return Api.post(`/api/arrest_folders`, data);
};
export const update_arrest_folder = (id, data) => {
  return Api.put(`/api/arrest_folders/${id}`, data);
};
export const remote_arrest_folder = (id) => {
  return Api.delete(`/api/arrest_folders/${id}`);
};
