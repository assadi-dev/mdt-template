import api from "../../../services/api/instance";

export const fetchUserData = (idAgent, signal) => {
  return api.get(`agents/compte/${idAgent}`, { signal });
};

export const updateUser = (idAgent, data) => {
  return api.put(`agents/${idAgent}`, data);
};
