import Api from "../../../../../../../../../../../services/api/instance";
import { cleanAgentMatricule } from "../../../../../../../../../../../services/utils/user";

export const save_avertissement = (data) => {
  return Api.post(`/avertissements`, data);
};
export const update_avertissement = (id, data) => {
  return Api.put(`/avertissements/${id}`, data);
};
export const delete_avertissement = (id) => {
  return Api.delete(`/avertissements/${id}`);
};

export const valuesToDispatch = (values, result, agent) => {
  const { lastname, firstname, matricule } = agent;
  values.agent = cleanAgentMatricule(matricule, firstname, lastname);
  values.id = result?.id;
  values.numeroAvertissement = result?.numeroAvertissement;

  return values;
};
