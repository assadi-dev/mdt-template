import EncodeArmeForm from "./Form/EncodeArmeForm";
import uniqid from "uniqid";

export const ENCODE_ARMES = "encode-arme";

export default {
  "encode-arme": {
    element: EncodeArmeForm,
    data: null,
  },
};

export const typeOfArmesEnum = [
  { id: uniqid(), value: "berreta", label: "Berreta" },
  { id: uniqid(), value: "glock", label: "Glock" },
  { id: uniqid(), value: "petoir", label: "Pétoire" },
];
