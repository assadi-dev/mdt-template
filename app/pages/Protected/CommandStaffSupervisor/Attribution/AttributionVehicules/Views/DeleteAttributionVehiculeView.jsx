import React from "react";
import DeleteConfirmForm from "../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import useProcess from "../../../../../../hooks/useProcess";
import {
  toastError,
  toastSuccess,
} from "../../../../../../services/utils/alert";
import { useDispatch } from "react-redux";
import { remove_vehicleAttribution } from "../../../../../../features/VehicleAttribution/VehicleAttribution.slice";

const DeleteAttributionVehiculeView = ({
  payload,
  onCloseModal = () => {},
  ...props
}) => {
  const TITLE_TEXT = `Voulez-vous supprimer l'attribution vehicule ?`;
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();
  const ID = payload?.id;

  const handleConfirm = async () => {
    try {
      toggleProcess();
      dispatch(remove_vehicleAttribution([ID]));
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

export default DeleteAttributionVehiculeView;
