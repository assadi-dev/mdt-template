import Api from "../../../../../services/api/instance";

export const fetchUserbyIdentification = (identification) => {
  return Api.get(`/civil/identification/${identification}`);
};
export const saveEncodingWeapon = (body) => {
  return Api.post(`/weapon_encodings`, body);
};
