import React from "react";
import useProcess from "../../../../../../../hooks/useProcess";

import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../../components/Forms/FormView.styled";
import { useDispatch } from "react-redux";
import VehicleEncodingForm from "./VehicleEncodingForm";
import { encodeCivilVehicle } from "../../../../../../../features/VehicleEncoding/VehicleEncoding.slice";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";
import { saveVehicleEncoding } from "../../helpers";

const EncodeFormVehicule = ({ onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();

  const submitFormArme = async (values) => {
    try {
      toggleProcess();
      const res = await saveVehicleEncoding(values);
      dispatch(encodeCivilVehicle(res.data));
      toastSuccess();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
      onCloseModal();
    }
  };

  return (
    <>
      <ModalFormContainer {...props}>
        <HeaderModal>
          <h2 className="form-title">Encoder un véhicule </h2>
          <CloseModalBtn className="close-section" onClick={onCloseModal} />
        </HeaderModal>
        <VehicleEncodingForm process={process} submitForm={submitFormArme} />
      </ModalFormContainer>
    </>
  );
};

export default EncodeFormVehicule;
