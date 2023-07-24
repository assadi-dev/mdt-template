import img_placeholder from "../assets/img/img_placeholder.jpeg";
import unknown_male from "../assets/img/unknown-male.jpeg";
import unknown_female from "../assets/img/unknown-female.jpeg";

export const TOKEN_STORAGE_NAME =
  process.env.APP_NAME.toLocaleLowerCase()
    .replace("mdt", "mdt911")
    .replace(/\s/, "-") + "-storage";

export const REFRESH_TOKEN_STORAGE_NAME = "mdt911-Offline-Refresh-Token";
export const USER_DATA_STORAGE = TOKEN_STORAGE_NAME.replace(
  "storage",
  "user-storage"
);
export const ID_SERVICE_STORAGE = "mdt911-service-active";

const protocol = location.protocol;

export const MERCURE_HUB_URL = process.env.MERCURE_URL;

export const TOPIC_URL = process.env.TOPIC_URL;

export const APP_NAME = process.env.APP_NAME;

export const API_BASE_URL = protocol + "//" + process.env.APP_URLBACKEND;

export const API_INSTANCE = API_BASE_URL + "/api";

export const blank_img = img_placeholder;
export const user_mal = unknown_male;
export const user_female = unknown_female;
