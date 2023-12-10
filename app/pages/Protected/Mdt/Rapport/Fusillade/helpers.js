import Api from "../../../../../services/api/instance";

export const saveGunFightReport = (body) => {
  return Api.post(`/gunfight_reports`, body);
};
