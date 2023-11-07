import api from "../../../../services/api/instance";

import {
  cleanAgentMatricule,
  cleanAgentNoMatricule,
} from "../../../../services/utils/user";

export const ShowAgent = (agent) => {
  const { matricule, firstname, lastname } = agent;
  return cleanAgentMatricule(matricule, firstname, lastname);
};

export const postAcquisitions = (data) => {
  return api.post(`/acquisitions`, data);
};
export const editAcquisitions = (id, data) => {
  return api.put(`/acquisitions/${id}`, data);
};
export const deleteAcquisitions = (id) => {
  return api.delete(`/acquisitions/${id}`);
};
