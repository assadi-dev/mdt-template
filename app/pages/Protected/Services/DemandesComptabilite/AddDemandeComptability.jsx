import React, { useState } from "react";
import {
  DemandeCompatibiliteBody,
  DemandeCompatibiliteContainer,
  DemandeCompatibiliteFormContainer,
  FormFooter,
  HeadertitlePage,
  PreviewBtn,
  RowHeaderAction,
} from "./DemandeComptabilite.styled";
import {
  ErrorSection,
  FormContainer,
  SubmitButton,
} from "../../../../components/Forms/FormView.styled";
import { useRef } from "react";
import LexicalMarkdownEditor from "../../../../components/TextEditor/LexicalMarkdownEditor";
import MarkdowTextEditor from "../../../../components/TextEditor/MarkdowTextEditor";
import { useForm } from "react-hook-form";
import { datetimeFormatISO8601 } from "../../../../services/utils/dateFormat";
import useProcess from "../../../../hooks/useProcess";
import SpinnerButton from "../../../../components/Shared/Loading/SpinnerButton";
import useModalState from "../../../../hooks/useModalState";
import { createPortal } from "react-dom";
import Modal from "../../../../components/Modal/Modal";
import PreviewDocument from "./PreviewDocument";

const AddDemandeComptability = () => {
  const { process, toggleProcess } = useProcess();

  const { modalState, toggleModal } = useModalState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    getValues,
    clearErrors,
  } = useForm({
    defaultValues: {
      agent: "test test",
      objet: "",
      date: datetimeFormatISO8601(new Date()),
      montant: "",
      raison: "",
    },
  });

  const handleChangeText = (value) => {
    if (errors.raison) clearErrors("raison");
    setValue("raison", value);
  };

  const submit = async (values) => {
    console.log(values);
    if (!values.raison) return setError("raison", "erre");
    toggleProcess();
  };

  return (
    <>
      <DemandeCompatibiliteContainer>
        {/*   <HeadertitlePage> Demande de comptabilité </HeadertitlePage> */}
        <RowHeaderAction>
          <PreviewBtn className="bg-btn-alt-theme-color" onClick={toggleModal}>
            Aperçu du document
          </PreviewBtn>
        </RowHeaderAction>
        <DemandeCompatibiliteBody>
          <DemandeCompatibiliteFormContainer>
            <FormContainer
              className="form-theme-color-alt"
              onSubmit={handleSubmit(submit)}
            >
              <div className="form-control">
                <label htmlFor="subject">Objet de la demande</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Objet:"
                  {...register("objet", { required: true })}
                />
                <ErrorSection>
                  {errors.objet && (
                    <small className="text-error">
                      Veuillez renseignez L'objet de la demande
                    </small>
                  )}
                </ErrorSection>
              </div>
              <div className="form-control">
                <label htmlFor="date">Date et heure</label>
                <input
                  id="date"
                  type="datetime"
                  placeholder="Date et Heures"
                  {...register("date")}
                  readOnly
                />
              </div>
              <div className="form-control">
                <label htmlFor="amount">Montant</label>
                <input
                  id="amount"
                  type="text"
                  placeholder="1000"
                  {...register("montant", { required: true })}
                />
                <ErrorSection>
                  {errors.montant && (
                    <small className="text-error">
                      Veuillez renseignez le montant
                    </small>
                  )}
                </ErrorSection>
              </div>

              <div className="form-control">
                {" "}
                <label htmlFor="raison">Raison</label>
                <MarkdowTextEditor
                  id="raison"
                  className="theme-text-editor-alt"
                  getOutput={handleChangeText}
                />
                <ErrorSection>
                  {errors.raison && (
                    <small className="text-error">
                      Veuillez décrire la raison de votre demande
                    </small>
                  )}
                </ErrorSection>
              </div>
              <FormFooter>
                <SubmitButton className="bg-btn-alt-theme-color" type="submit">
                  Envoyer la demande {process && <SpinnerButton />}
                </SubmitButton>
              </FormFooter>
            </FormContainer>
          </DemandeCompatibiliteFormContainer>
        </DemandeCompatibiliteBody>
      </DemandeCompatibiliteContainer>

      {createPortal(
        <Modal isOpen={modalState.isOpen} onClose={toggleModal}>
          <PreviewDocument
            previewData={{ ...getValues() }}
            onCloseModal={toggleModal}
            className="modal-theme-color"
          />{" "}
        </Modal>,
        document.body
      )}
    </>
  );
};

export default AddDemandeComptability;
