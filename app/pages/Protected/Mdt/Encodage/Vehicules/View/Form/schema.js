import * as yup from "yup";
import { requiredMessage } from "../../../../../../../config/ValidationMessage";

export const defaultValues = {
  civil: "",
  identificationNumber: "",
  lastname: "",
  firstname: "",
  typeVehicules: "",
  immatriculation: "",
};

export const vehicleEncodingSchema = yup.object().shape({
  identificationNumber: yup.string().required(requiredMessage),
  lastname: yup.string().required(requiredMessage),
  firstname: yup.string().required(requiredMessage),
  type: yup.string().required(requiredMessage),
  immatriculation: yup.string().required(requiredMessage),
});
