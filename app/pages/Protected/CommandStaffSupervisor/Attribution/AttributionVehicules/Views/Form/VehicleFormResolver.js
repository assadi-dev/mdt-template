import * as yup from "yup";
import { requiredMessage } from "../../../../../../../config/ValidationMessage";

export const formAtrributionVehicule = {
  agent: "",
  grade: "",
  agentAttributedLabel: "",
  agentAttributed: "",
  typeVehicle: "",
  immatriculation: "",
  idVehicle: "",
};

export const vehicleAttributionResolver = yup.object().shape({
  agent: yup.string(),
  grade: yup.string(),
  agentAttributedLabel: yup.string(),
  agentAttributed: yup.string().required(requiredMessage),
  typeVehicle: yup.string().required(requiredMessage),
  immatriculation: yup.string().required(requiredMessage),
  idVehicle: yup.string().required(requiredMessage),
});
