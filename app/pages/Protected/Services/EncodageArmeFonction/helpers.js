import api from "../../../../services/api/instance";

export const postServiceWeaponEncoding = (body) => {
  return api.post(`/service_weapon_encodings`, body);
};

export const updateServiceWeaponEncoding = (id, data) => {
  return api.put(`/service_weapon_encodings/${id}`, data);
};
export const deleteServiceWeaponEncoding = (id) => {
  return api.delete(`/service_weapon_encodings/${id}`);
};
