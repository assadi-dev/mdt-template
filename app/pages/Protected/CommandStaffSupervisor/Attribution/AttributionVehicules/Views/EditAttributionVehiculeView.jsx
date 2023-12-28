import React from "react";
import { HeaderModal } from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import { ModalFormAttributionVehiculeContainer } from "../AttributionVehicules.styled";
import FormAttributionVehicule from "./Form/FormAttribution.Vehicule";
import useProcess from "../../../../../../hooks/useProcess";
import {
  toastError,
  toastSuccess,
} from "../../../../../../services/utils/alert";
import { useDispatch } from "react-redux";
import { edit_vehicleAttribution } from "../../../../../../features/VehicleAttribution/VehicleAttribution.slice";
import { udpate_vehicleAttribution } from "../helpers";

const EditAttributionVehiculeView = ({ payload, onCloseModal, ...props }) => {
  const TITLE_DOCUMENT = `Editer l'attribution d'un véhicule`;
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();
  const ID = payload?.id;

  const handleEditAttribution = async (values) => {
    try {
      toggleProcess();

      const payload = { ...values, id: ID };
      payload.agentAttributed = payload.agentAttributedLabel;
      delete values.createdAt;
      delete values.agent;
      delete values.id;
      delete values.agentAttributedLabel;
      delete values.idAgentAttributed;
      await udpate_vehicleAttribution(ID, values);
      dispatch(edit_vehicleAttribution(payload));
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
        <h2 className="form-title">{TITLE_DOCUMENT}</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormAttributionVehicule
        defaultFormValues={payload}
        onSaveAttribution={handleEditAttribution}
        process={process}
        labelSubmiButton={"Mettre à jour"}
      />
    </ModalFormAttributionVehiculeContainer>
  );
};

export default EditAttributionVehiculeView;
