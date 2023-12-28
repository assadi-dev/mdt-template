import Api from "../../../../services/api/instance";

export const update_user_acount = (id, data) => {
  return Api.put(`/users/${id}`, data);
};
