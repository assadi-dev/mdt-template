import Api from "../../../../../services/api/instance";

export const saveGunFightReport = (body) => {
  return Api.post(`/gunfight_reports`, body);
};
export const edit_GunFightReport = (id, body) => {
  return Api.put(`/gunfight_reports/${id}`, body);
};
export const delete_GunFightReport = (id) => {
  return Api.delete(`/gunfight_reports/${id}`);
};
