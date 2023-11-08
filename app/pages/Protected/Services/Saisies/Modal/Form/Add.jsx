import React from "react";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  HeaderModal,
  ModalFooter,
  ModalFormContainer,
  SubmitButton,
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
import { addAcquisitions } from "../../../../../../features/Acquisitions/Acquisitions.slice";
import { postAcquisitions } from "../../helpers";
import {
  toastError,
  toastSuccess,
} from "../../../../../../services/utils/alert";
import FormAcquisition from "./FormAcquisition";

const Add = ({ onCloseModal, payload, ...props }) => {
  const dispatch = useDispatch();

  const { idAgent, firstname, lastname, matricule } = payload;

  const defaultValues = {
    agent: `api/agents/${idAgent}`,
    dateOfAcquisition: "",
    post: "",
    acquisitionDescription: "",
  };

  const { process, toggleProcess } = useProcess();

  const submitForm = async (values) => {
    try {
      toggleProcess();

      const datatoSend = {
        agent: `api/agents/${idAgent}`,
        ...values,
      };

      const res = await postAcquisitions(datatoSend);
      const payload = {
        ...res.data,
        firstname,
        lastname,
        matricule,
      };

      dispatch(addAcquisitions(payload));
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
    <>
      <ContentContainer {...props}>
        <HeaderModal>
          <h2 className="form-title">Ajouter une saisie </h2>
          <CloseModalBtn className="close-section" onClick={onCloseModal} />
        </HeaderModal>
        <FormAcquisition
          process={process}
          defaultValue={defaultValues}
          submitForm={submitForm}
          idAgent={idAgent}
        />
      </ContentContainer>
    </>
  );
};

export default Add;
