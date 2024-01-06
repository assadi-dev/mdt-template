import Api from "../../../../../../../../../../../services/api/instance";

export const save_arrestReport = (data) => {
  return Api.post(`/arrest_reports`, data);
};
export const update_arrestReport = (id, data) => {
  return Api.put(`/arrest_reports/${id}`, data);
};
export const delete_arrestReport = (id) => {
  return Api.delete(`/arrest_reports/${id}`);
};
