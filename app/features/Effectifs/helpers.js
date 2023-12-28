import api from "../../services/api/instance";

export const initialState = {
  collections: [],
  status: "pending",
  error: "",
  count: 0,
};

export const fetchEffectifsCollections = (page, params) => {
  return api.get(`agent/effectif/pagination/${page}`, {
    params,
  });
};
