import { API_BASE_URL, API_INSTANCE } from "../../config/constantes";

export const api_register = (body) => {
  return fetch(API_INSTANCE + "/register", {
    method: "POST",
    body: JSON.stringify(body),
  });
};
