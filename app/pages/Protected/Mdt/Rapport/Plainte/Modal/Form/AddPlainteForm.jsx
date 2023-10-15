import React from "react";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../components/Forms/FormView.styled";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";
import { useForm } from "react-hook-form";
import useProcess from "../../../../../../../hooks/useProcess";
import MarkdowTextEditor from "../../../../../../../components/TextEditor/MarkdowTextEditor";

const AddPlainteForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      idAgent: null,
      depositaire: "",
      accused: "",
      body: "",
    },
  });

  const { process, toggleProcess } = useProcess();
  const required = true;

  const handleChangeText = (value) => {
    if (errors.body) clearErrors("raison");
    setValue("body", value);
  };

  const savePlainte = (values) => {
    console.log(values);
  };

  return (
    <FormContainer
      className="form-theme-color"
      onSubmit={handleSubmit(savePlainte)}
    >
      <FormControl>
        <label htmlFor="depositaire">Dépositaire</label>
        <input
          type="text"
          {...register("depositaire", { required })}
          placeholder="Prénom Nom"
        />

        <ErrorSection>
          {errors.depositaire && (
            <small className="text-error">
              Veuillez entrer le prénom et le nom du depositaire
            </small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="accused">Accusé</label>
        <input
          type="text"
          {...register("accused", { required })}
          placeholder="Prénom Nom"
        />

        <ErrorSection>
          {errors.accused && (
            <small className="text-error">
              Veuillez entrer le prénom et le nom de l'accusé
            </small>
          )}
        </ErrorSection>
      </FormControl>

      <FormControl>
        <label htmlFor="body">Corps de la déposition</label>
        <MarkdowTextEditor
          id="body"
          className="theme-text-editor"
          getOutput={handleChangeText}
        />

        <ErrorSection>
          {errors.body && (
            <small className="text-error">
              Veuillez entrer le corp du message
            </small>
          )}
        </ErrorSection>
      </FormControl>

      <ModalFooter>
        <ButtonWithLoader
          labelButton={"Encoder"}
          isLoading={process}
          className="bg-btn-theme-color"
          type="submit"
        />
      </ModalFooter>
    </FormContainer>
  );
};

export default AddPlainteForm;
