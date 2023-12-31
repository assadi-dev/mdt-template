import { toast } from "react-toastify";
import uniqid from "uniqid";

export const toastSuccess = (message = "Enregistré", toastId) => {
  toastId = toastId ? toastId : uniqid();

  return toast.success(message, {
    autoClose: true,
    progress: false,
    toastId: toastId,
  });
};
export const toastError = (message = "Une Erreur est survenue", toastId) => {
  toastId = toastId ? toastId : uniqid();

  return toast.error(message, {
    autoClose: true,
    progress: false,
    toastId: toastId,
  });
};
