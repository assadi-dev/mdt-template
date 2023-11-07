import {
  cleanAgentMatricule,
  cleanAgentNoMatricule,
} from "../../../../services/utils/user";

export const ShowAgent = (agent) => {
  const { matricule, firstname, lastname } = agent;
  return cleanAgentMatricule(matricule, firstname, lastname);
};
