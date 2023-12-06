import Api from "../../../../../../../services/api/instance";

export const saveCreateRapportRookie = (body) => {
  return Api.post(`/rookie_report/create`, body);
};
