import api from "../../../../services/api/instance";

export const updateAccountingRequest = (id, payload) => {
  return api.put(`/accounting_requests/${id}`, payload);
};
