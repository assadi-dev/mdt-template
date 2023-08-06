import lspd_emblem from "../assets/img/lspd.png";
import bcso_emblem from "../assets/img/bcso.png";
import doj_emblem from "../assets/img/doj.png";
import uniqid from "uniqid";

export const listsFactions = [
  {
    id: uniqid(),
    short_name: "lspd",
    full_name: "Los Santos Police Departement",
    emblem: lspd_emblem,
  },
  {
    id: uniqid(),
    short_name: "bcso",
    full_name: "Blaine County Sheriff Office",
    emblem: bcso_emblem,
  },
  {
    id: uniqid(),
    short_name: "doj",
    full_name: "Departement of Justice",
    emblem: doj_emblem,
  },
];

export const factionsCollections = {
  lspd: {
    short_name: "lspd",
    full_name: "Los Santos Police Departement",
    emblem: lspd_emblem,
  },
  bcso: {
    short_name: "bcso",
    full_name: "Blaine County Sheriff Office",
    emblem: bcso_emblem,
  },
  doj: {
    short_name: "doj",
    full_name: "Departement of Justice",
    emblem: doj_emblem,
  },
};
