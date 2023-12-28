import React from "react";
import DeleteConfirmForm from "../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import useProcess from "../../../../../../hooks/useProcess";
import {
  toastError,
  toastSuccess,
} from "../../../../../../services/utils/alert";
import { useDispatch } from "react-redux";
import { remove_codePenal } from "../../../../../../features/CodePenals/CodPenal.slice";
import { delete_codePenal } from "./helpers";

const DeleCodepenal = ({ payload, onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();
  const ID = payload?.id;

  const confirmDelete = async () => {
    try {
      toggleProcess();
      await delete_codePenal(ID);
      dispatch(remove_codePenal([ID]));
      onCloseModal();
      toastSuccess();
    } catch (error) {
      console.log(error);
      toastError();
    } finally {
      toggleProcess();
    }
  };

  const TEXT_DELETE = `Voulez-vous supprimer  ${payload.label} ?`;

  return (
    <DeleteConfirmForm
      text={TEXT_DELETE}
      onConfirm={confirmDelete}
      process={process}
      {...props}
    ></DeleteConfirmForm>
  );
};

export default DeleCodepenal;
