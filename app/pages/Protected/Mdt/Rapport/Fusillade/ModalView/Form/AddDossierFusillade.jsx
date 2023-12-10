import React from "react";
import {
  HeaderModal,
  ModalContainer,
} from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormDossiertFusillade from "./FormDossiertFusillade";
import { DossierFusilladeFormContainer } from "../../Fusillade.styled";
import { useDispatch, useSelector } from "react-redux";
import useProcess from "../../../../../../../hooks/useProcess";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";
import { saveGunFightReport } from "../../helpers";
import { addGunFightReport } from "../../../../../../../features/GunFightReport/GunFightReport.slice";

const AddDossierFusillade = ({ onCloseModal = () => {}, ...props }) => {
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );

  const submitGunFightReport = async (values) => {
    try {
      toggleProcess();
      values.agent = `api/agents/${idAgent}`;
      const response = await saveGunFightReport(values);
      const payloadData = {
        ...response.data,
        ...values,
        createdAt: { date: response.data.createdAt },
      };
      dispatch(addGunFightReport(payloadData));
      toastSuccess();
      onCloseModal();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <DossierFusilladeFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Ajouter un dossier de fusillades</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormDossiertFusillade process={process} onSave={submitGunFightReport} />
    </DossierFusilladeFormContainer>
  );
};

export default AddDossierFusillade;
