import React from "react";
import DeleteConfirmForm from "../../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import { useDispatch } from "react-redux";
import { remove_sanction } from "../../../../../../../features/Sanctions/Sanctions.slice";
import { delete_sanction } from "../../helpers";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";
import useProcess from "../../../../../../../hooks/useProcess";

const DeleteSanctionView = ({ payload, onCloseModal, ...props }) => {
  const TITLE_TEXT = `Voulez-vous supprimer la sanction n° ${payload?.numeroSanction} ?`;
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();

  const ID = payload?.id;

  const handleConfirm = async () => {
    try {
      toggleProcess();
      dispatch(remove_sanction([ID]));
      await delete_sanction(ID);
      onCloseModal();
      toastSuccess();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <DeleteConfirmForm
      text={TITLE_TEXT}
      onConfirm={handleConfirm}
      onCloseModal={onCloseModal}
      process={process}
      {...props}
    ></DeleteConfirmForm>
  );
};

export default DeleteSanctionView;
