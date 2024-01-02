import React from "react";
import AddArrestReportView from "./ArrestReportView";

export const ADD_ARREST_REPORT = "ADD_ARREST_REPORT";
export const SHOW_ARREST_REPORT = "SHOW_ARREST_REPORT";
export const EDIT_ARREST_REPORT = "EDIT_ARREST_REPORT";
export const DELETE_ARREST_REPORT = "DELETE_ARREST_REPORT";

export const ListAddArrestReportModalView = {
  [ADD_ARREST_REPORT]: {
    element: AddArrestReportView,
  },
};
