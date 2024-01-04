import React from "react";
import {
  ArrestFolderFormContainer,
  MainViewContainer,
} from "./ArrestFolder.styled";
import { HeaderModal } from "../../../../../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../../../../../components/Modal/CloseModalBtn";
import ArrestFolderForm from "../../Form/ArrestFolderForm";

const AddArrestFolderView = ({ payload, onCloseModal, ...props }) => {
  return (
    <ArrestFolderFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title ">Dossier d'arrestation</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <MainViewContainer>
        <ArrestFolderForm />
      </MainViewContainer>
    </ArrestFolderFormContainer>
  );
};

export default AddArrestFolderView;
