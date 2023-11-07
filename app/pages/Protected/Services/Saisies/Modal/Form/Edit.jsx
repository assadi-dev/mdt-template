import React from "react";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  HeaderModal,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import { useForm } from "react-hook-form";
import { ContentContainer } from "../../Saisie.styled";
import { AnimatePresence, motion } from "framer-motion";
import { postesListes } from "../../../../../../config/options";
import SpinnerButton from "../../../../../../components/Shared/Loading/SpinnerButton";
import useProcess from "../../../../../../hooks/useProcess";
import MarkdowTextEditor from "../../../../../../components/TextEditor/MarkdowTextEditor";
import { useDispatch } from "react-redux";
import {
  addAcquisitions,
  updateAcquisitions,
} from "../../../../../../features/Acquisitions/Acquisitions.slice";
import { postAcquisitions } from "../../helpers";
import {
  toastError,
  toastSuccess,
} from "../../../../../../services/utils/alert";
import FormAcquisition from "./FormAcquisition";

const Edit = ({ onCloseModal, payload, ...props }) => {
  const dispatch = useDispatch();

  const id = payload?.id;

  const defaultValues = {
    dateOfAcquisition: payload?.dateOfAcquisition,
    post: payload?.post,
    acquisitionDescription: payload?.acquisitionDescription,
  };

  const { process, toggleProcess } = useProcess();

  const submitForm = async (values) => {
    try {
      toggleProcess();

      const datatoSend = {
        ...values,
      };

      // const res = await postAcquisitions(datatoSend);
      const payload = {
        id,
        ...values,
      };

      dispatch(updateAcquisitions(payload));
      toastSuccess();
    } catch (error) {
      console.log(error.message);
      toastError();
    } finally {
      toggleProcess();
      onCloseModal();
    }
  };

  return (
    <ContentContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Editer une saisie </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormAcquisition defaultValue={defaultValues} submitForm={submitForm} />
    </ContentContainer>
  );
};

export default Edit;
