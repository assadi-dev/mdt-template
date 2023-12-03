import React from "react";
import { HeaderModal } from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import { ModalRapportIntervention } from "../../RapportIntervention.styled";
import FormRapportIntervention from "./FormRapportIntervention";
import useProcess from "../../../../../../../hooks/useProcess";
import { useDispatch, useSelector } from "react-redux";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";
import { saveUpdateRapportIntervention } from "./helpers";
import { editInterventionReport } from "../../../../../../../features/interventionReport/InterventionReport.slice";

const EditRapportIntervention = ({ payload, onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();

  const dispatch = useDispatch();

  const save = async (values) => {
    try {
      toggleProcess();
      const id = payload.id;
      delete values.agent;
      delete values.createdAt;
      const body = { ...values };

      const res = await saveUpdateRapportIntervention(id, body);

      dispatch(editInterventionReport(values));
      props.onCloseModal();
      toastSuccess();
      onCloseModal();
    } catch (error) {
      console.log(error.message);
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <ModalRapportIntervention {...props}>
      <HeaderModal>
        <h2 className="form-title">
          Modifier le rapport intervention n° {payload?.numeraRapport}{" "}
        </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormRapportIntervention
        labelSaveButton="Mettre à jour"
        defaultValues={payload}
        submitValues={save}
        process={process}
      />
    </ModalRapportIntervention>
  );
};

export default EditRapportIntervention;
