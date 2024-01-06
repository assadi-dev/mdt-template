import * as yup from "yup";
import { requiredMessage } from "../../../../../../../../../../config/ValidationMessage";

// Avertissement Form
export const AvertissemenValues = {
  civil: "",
  agent: "",
  numeroAvertissement: "",
  location: "",
  description: "",
};

export const AvertissementResolver = yup.object().shape({
  numeroAvertissement: yup.string(),
  location: yup.string().required(requiredMessage),
  description: yup.string().required(requiredMessage),
  civil: yup.string(),
  agent: yup.string(),
});

// Traffic Form

export const TrafficValues = {
  numeroTraffic: "",
  location: "",
  infractions: [],
  civil: "",
  agent: "",
  amount: 0,
};

export const TrafficResolver = yup.object().shape({
  numeroTraffic: yup.string(),
  location: yup.string().required(requiredMessage),
  infractions: yup.array().required(requiredMessage),
  civil: yup.string(),
  agent: yup.string(),
  amount: yup.string(),
});

// Arrest FOLDER Form
export const ArrestFolderValues = {
  numeroArrestFolder: "",
  civil: "",
  location: "",
  infractions: [],
  description: "",
  amount: "",
  sentence: "",
  dateOfEntry: "",
  mirandaLaw: false,
  healthcare: false,
  feed: false,
  avocat: false,
  agent: "",
  amount: 0,
};

export const ArrestFolderResolver = yup.object().shape({
  numeroArrestFolder: yup.string(),
  civil: yup.string(),
  location: yup.string().required(requiredMessage),
  infractions: yup.array().required(requiredMessage),
  description: yup.string(),
  amount: yup.string(),
  sentence: yup.string(),
  dateOfEntry: yup.string().required(requiredMessage),
  mirandaLaw: yup.boolean(),
  healthcare: yup.boolean(),
  feed: yup.boolean(),
  avocat: yup.boolean(),
  agent: yup.string(),
  amount: yup.string(),
});

// Arrest REPORT Form
export const ArrestReportrValues = {
  numeroArrestReport: "",
  civil: "",
  location: "",
  infractions: [],
  amount: "",
  sentence: "",
  dateOfEntry: "",
  conversionUp: false,
  agent: "",
  amount: 0,
};

export const ArrestReportResolver = yup.object().shape({
  numeroArrestFolder: yup.string(),
  civil: yup.string(),
  location: yup.string().required(requiredMessage),
  infractions: yup.array().required(requiredMessage),
  amount: yup.string(),
  sentence: yup.string(),
  dateOfEntry: yup.string().required(requiredMessage),
  conversionUp: yup.boolean(),
  agent: yup.string(),
  amount: yup.string(),
});
