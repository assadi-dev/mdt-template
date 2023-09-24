import React from "react";
import EncodeFormVehicule from "./Form/EncodeFormVehicule";
import uniqid from "uniqid";

export const ENCODE_VEHICULE = "encode-vehicule";

export default {
  "encode-vehicule": {
    element: EncodeFormVehicule,
  },
};

export const typeOfVehiculesEnum = [
  { id: uniqid(), value: "berreta", label: "Berreta" },
  { id: uniqid(), value: "glock", label: "Glock" },
  { id: uniqid(), value: "petoir", label: "Pétoire" },
];
