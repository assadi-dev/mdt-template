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
