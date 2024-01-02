import React from "react";
import AddTraffic from "./AddTraffic";
import ShowTraffic from "./ShowTraffic";

export const ADD_TRAFFIC = "ADD_TRAFFIC";
export const SHOW_TRAFFIC = "SHOW_TRAFFIC";
export const EDIT_TRAFFIC = "EDIT_TRAFFIC";
export const DELETE_TRAFFIC = "DELETE_TRAFFIC";

export const ListTrafficModalView = {
  [ADD_TRAFFIC]: {
    element: AddTraffic,
  },
  [SHOW_TRAFFIC]: {
    element: ShowTraffic,
  },
};
