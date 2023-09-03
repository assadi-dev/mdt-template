import { USER_DATA_STORAGE } from "../../config/constantes";
import { firsLetterCapitalise } from "../../services/utils/textUtils";

USER_DATA_STORAGE;

export const retrieveUseridentity = () => {
  if (!localStorage.getItem(USER_DATA_STORAGE)) return;

  const storage = JSON.parse(localStorage.getItem(USER_DATA_STORAGE));
  const agent = storage.agentIdentity.split(" ");
  return { firstname: agent[0], name: agent[1] };
};

export const retrieveUserFaction = () => {
  if (!localStorage.getItem(USER_DATA_STORAGE)) return;

  const storage = JSON.parse(localStorage.getItem(USER_DATA_STORAGE));

  return storage.faction;
};

export const retrieveSubmitUseridentity = (userIdentity) => {
  if (!userIdentity) return;

  const agent = userIdentity.split(" ");
  return {
    firstname: firsLetterCapitalise(agent[0]).trim(),
    name: firsLetterCapitalise(agent[1]).trim(),
  };
};
