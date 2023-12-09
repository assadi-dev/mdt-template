import React from "react";
import {
  DeleteConfirm,
  HeaderModalDelete,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import {
  ConfirmButton,
  DeleteRowBtn,
  DialogContent,
} from "../../../../../../components/Modal/DialogConfirm/DialogueConfirm.styled";
import DeleteConfirmForm from "../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import { useDispatch } from "react-redux";
import { removeRookieReport } from "../../../../../../features/RookieReport/RookieReport.slice";
import {
  delete_rookieReports,
  delete_rookieReports_collections,
} from "../../../../../../features/RookieReport/helpers";
import useProcess from "../../../../../../hooks/useProcess";

const ConfirmDelete = ({ payload, onCloseModal, ...props }) => {
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();
  const { id, numeroReport } = payload;

  const TEXT_CONFIRM = `Voulez vous supprimer le rapport n° ${numeroReport}`;

  const onConfirm = async () => {
    try {
      toggleProcess();
      await delete_rookieReports(id);
      dispatch(removeRookieReport([id]));
    } catch (error) {
    } finally {
      toggleProcess();
    }

    onCloseModal();
  };
  return (
    <DeleteConfirmForm
      {...props}
      text={TEXT_CONFIRM}
      onCancel={onCloseModal}
      onCloseModal={onCloseModal}
      onConfirm={onConfirm}
      process={process}
    ></DeleteConfirmForm>
  );
};

export default ConfirmDelete;
