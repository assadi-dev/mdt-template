import React from "react";
import AddTraffic from "./AddTraffic";
import ShowTraffic from "./ShowTraffic";
import DeleteTraffic from "./DeleteTraffic";
import EditTrafficView from "./EditTrafficView";

export const ADD_TRAFFIC = "ADD_TRAFFIC";
export const SHOW_TRAFFIC = "SHOW_TRAFFIC";
export const EDIT_TRAFFIC = "EDIT_TRAFFIC";
export const DELETE_TRAFFIC = "DELETE_TRAFFIC";

export const ListTrafficModalView = {
  [ADD_TRAFFIC]: {
    element: AddTraffic,
  },
  [EDIT_TRAFFIC]: {
    element: EditTrafficView,
  },
  [DELETE_TRAFFIC]: {
    element: DeleteTraffic,
  },
};
