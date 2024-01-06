import React from "react";
import DeleteConfirmForm from "../../../../../../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import { useDispatch, useSelector } from "react-redux";
import useProcess from "../../../../../../../../../../../hooks/useProcess";
import { delete_traffic } from "./helper";
import { removeTraffic } from "../../../../../../../../../../../features/Civils/Reports/TrafficSlice";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../../../../../services/utils/alert";

const DeleteTraffic = ({ payload, onCloseModal, ...props }) => {
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();

  const ID = payload?.id;
  const LABEL_TEXT = `Voulez-vous supprimer le traffic n° ${
    payload?.numeroTraffic || "????"
  } ?`;
  const DELETE_SUCCESS = `Le rapport n° ${
    payload?.numeroTraffic || "????"
  }  à bien été supprimé`;

  const confirmDelete = async () => {
    try {
      toggleProcess();
      await delete_traffic(ID);
      dispatch(removeTraffic([ID]));
      onCloseModal();
      toastSuccess(DELETE_SUCCESS);
    } catch (error) {
      console.log(error.message);
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <DeleteConfirmForm
      text={LABEL_TEXT}
      onCloseModal={onCloseModal}
      {...props}
      process={process}
      onConfirm={confirmDelete}
    ></DeleteConfirmForm>
  );
};

export default DeleteTraffic;
