import React from "react";
import { HeaderModal } from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import { ModalFormAttributionVehiculeContainer } from "../AttributionVehicules.styled";
import FormAttributionVehicule from "./Form/FormAttribution.Vehicule";
import { useDispatch, useSelector } from "react-redux";
import { agent_iri } from "../../../../../../services/api/instance";
import { add_vehicleAttribution } from "../../../../../../features/VehicleAttribution/VehicleAttribution.slice";
import {
  toastError,
  toastSuccess,
} from "../../../../../../services/utils/alert";
import useProcess from "../../../../../../hooks/useProcess";
import { save_vehicleAttribution } from "../helpers";

const AddAttributionVehiculeView = ({ onCloseModal, ...props }) => {
  const authenticateUser = useSelector((state) => state.AuthenticateReducer);
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();

  const handleAddAttribution = async (values) => {
    values.agent = agent_iri + authenticateUser.idAgent;
    toggleProcess();
    try {
      const res = await save_vehicleAttribution(values);

      const payload = { id: res.data.id, ...values };
      payload.agentAttributed = values.agentAttributedLabel;
      dispatch(add_vehicleAttribution(payload));
      onCloseModal();
      toastSuccess();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <ModalFormAttributionVehiculeContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Attribuer un véhicule </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormAttributionVehicule
        onSaveAttribution={handleAddAttribution}
        process={process}
      />
    </ModalFormAttributionVehiculeContainer>
  );
};

export default AddAttributionVehiculeView;
