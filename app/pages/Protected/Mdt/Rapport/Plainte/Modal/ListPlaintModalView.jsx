import React from "react";

import ShowPlainte from "./ShowPlainte";
import AddPlainte from "./AddPlainte";

export const ADD_PLAINTE = "add-plainte";
export const SHOW_PLAINTE = "show-plainte";

export const ListPlaintModalView = {
  "add-plainte": {
    element: AddPlainte,
  },
  "show-plainte": {
    element: ShowPlainte,
  },
};
