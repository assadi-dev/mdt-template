import Api from "../../services/api/instance";
export const fetcheUserByPageApi = (page, params) => {
  return Api.get(`/users/pagination/${page}`, {
    params,
  });
};
