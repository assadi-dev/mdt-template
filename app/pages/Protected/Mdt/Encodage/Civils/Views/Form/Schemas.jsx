import * as yup from "yup";
import { requiredMessage } from "../../../../../../../config/ValidationMessage";

export const civilDefaultValues = {
  lastname: "",
  firstname: "",
  birthdate: "",
  address: "",
  phone: "",
  nationality: "",
  affiliation: "",
  job: "",
  hairColor: "",
  ethnie: "",
  driveLicence: "none",
  gender: "male",
  identificationNumber: "",
  ppa: false,
  permis: "none",
};

export const civilResolver = yup.object().shape({
  lastname: yup.string().required(requiredMessage),
  firstname: yup.string().required(requiredMessage),
  birthdate: yup.string().required(requiredMessage),
  address: yup.string().required(requiredMessage),
  phone: yup.string().required(requiredMessage),
  nationality: yup.string().required(requiredMessage),
  affiliation: yup.string().required(requiredMessage),
  job: yup.string().required(requiredMessage),
  hairColor: yup.string().required(requiredMessage),
  ethnie: yup.string().required(requiredMessage),
  identificationNumber: yup.string().required(requiredMessage),
  ppa: yup.boolean(),
});
