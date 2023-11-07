import api from "../../../../../services/api/instance";

export const postRequestAcuisition = (payload) => {
  return api.post(`/accounting_requests`, payload);
};
