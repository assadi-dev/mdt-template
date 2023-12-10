import React from "react";
import {
  HeaderModal,
  ModalContainer,
} from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormDossiertFusillade from "./FormDossiertFusillade";
import { DossierFusilladeFormContainer } from "../../Fusillade.styled";
import useProcess from "../../../../../../../hooks/useProcess";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";
import { useDispatch, useSelector } from "react-redux";
import { editGunFightReport } from "../../../../../../../features/GunFightReport/GunFightReport.slice";
import { edit_GunFightReport } from "../../helpers";

const EditDossierFusillade = ({ payload, onCloseModal, ...props }) => {
  const TITLE_MODAL = `Editer le dossier n° ${payload?.numeroReport}`;
  const { process, toggleProcess } = useProcess();
  const UPDATE_SUCCESS = `Le rapport n° ${payload?.numeroReport} à été mise à jour`;
  const dispatch = useDispatch();

  const submitGunFightReport = async (value) => {
    try {
      toggleProcess();
      const id = payload.id;
      delete value.agent;
      delete value.numeroReport;
      delete value.createdAt;
      console.log(value);
      await edit_GunFightReport(id, value);
      dispatch(editGunFightReport(value));
      toastSuccess(UPDATE_SUCCESS);
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
        <h2 className="form-title">{TITLE_MODAL}</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormDossiertFusillade
        defaultValues={payload}
        labelSaveButton="mettre à jour"
        process={process}
        onSave={submitGunFightReport}
      />
    </DossierFusilladeFormContainer>
  );
};

export default EditDossierFusillade;
