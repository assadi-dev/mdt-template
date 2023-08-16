import Api from "../../services/api/instance";

export const accueil = {
  page: "Accueil",
  path: "/",
  isCanAdd: true,
  isCanUpdate: false,
  isCanDelete: false,
  isShow: true,
};

export const fetchAccess = (grade_id) => {
  return Api.get(`/grades/access/${grade_id}`);
};
