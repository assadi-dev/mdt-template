import * as yup from "yup";
import { requiredMessage } from "../../../../../../config/ValidationMessage";

const defaultValues = {
  civil: "",
  identificationNumber: "",
  firstname: "",
  lastname: "",
  serialNumber: "",
  type: "",
};

export const weaponEncodingResolver = yup.object().shape({
  identificationNumber: yup.string().required(requiredMessage),
  lastname: yup.string().required(requiredMessage),
  firstname: yup.string().required(requiredMessage),
  serialNumber: yup.string().required(requiredMessage),
  type: yup.string().required(requiredMessage),
});
