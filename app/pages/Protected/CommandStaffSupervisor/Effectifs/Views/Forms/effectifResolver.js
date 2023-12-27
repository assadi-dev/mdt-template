import * as yup from "yup";
import { requiredMessage } from "../../../../../../config/ValidationMessage";

export const defaultFormValue = {
  firstname: "",
  lastname: "",
  gender: "male",
  phone: "",
  iban: "",
  grade: "",
  division: "",
  grade: "",
  phone: "",
};

export const effectifFormResolver = yup.object().shape({
  firstname: yup.string().required(requiredMessage),
  lastname: yup.string().required(requiredMessage),
  grade: yup.string().required(requiredMessage),
  matricule: yup.string().required(requiredMessage),
});
