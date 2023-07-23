import { USER_DATA_STORAGE } from "../../config/constantes";

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
