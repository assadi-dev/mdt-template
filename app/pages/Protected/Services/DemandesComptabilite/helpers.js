import { cleanAgentNoMatricule } from "../../../../services/utils/user";

export const ShowAgent = (agent) => {
  const { matricule, firstname, lastname } = agent;
  return cleanAgentNoMatricule(matricule, firstname, lastname);
};
