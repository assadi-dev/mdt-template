import React, { useState } from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../components/Modal/CloseModalBtn";
import { useForm } from "react-hook-form";
import { datetimeFormatISO8601 } from "../../../../../services/utils/dateFormat";
import { ModalBody, PreviewRow } from "../DemandeComptabilite.styled";
import { Button } from "../../../../../components/PageContainer";
import PreviewDocument from "./PreviewDocument";
import { AddForm } from "./AddForm";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const AddDemandeComptabilité = ({ onCloseModal, payload, ...props }) => {
  const [showPreview, setShowPreview] = useState(false);
  const { count } = useSelector(
    (state) => state.AccountingRequestByPageReducer
  );

  const { idAgent } = payload;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      agent: `api/agents/${idAgent}`,
      subject: "",
      date: datetimeFormatISO8601(new Date()),
      reason: "",
      amount: "00.00",
    },
  });

  const handelShowpreview = () => {
    setShowPreview((current) => (current = !current));
  };

  const TITLE_MODAL = showPreview ? "Aperçu du document" : "Nouvelle demande";
  const LABEL_BUTTON = showPreview ? "Nouvelle demande" : "Aperçu du document";

  return (
    <ModalFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title"> {TITLE_MODAL} </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <PreviewRow>
        <Button
          type="button"
          className="bg-btn-theme-color"
          onClick={handelShowpreview}
        >
          {LABEL_BUTTON}
        </Button>
      </PreviewRow>
      <ModalBody>
        <AnimatePresence>
          {showPreview ? (
            <PreviewDocument previewData={{ ...getValues() }} />
          ) : (
            <AddForm
              agent={payload}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              setError={setError}
              setValue={setValue}
              getValues={getValues}
              onCloseModal={onCloseModal}
            />
          )}
        </AnimatePresence>
      </ModalBody>
    </ModalFormContainer>
  );
};

export default AddDemandeComptabilité;
