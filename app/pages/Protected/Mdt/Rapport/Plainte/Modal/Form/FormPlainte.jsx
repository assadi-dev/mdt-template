import React from "react";
import { plaintDefaultValues, plaintsResolver } from "./Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../components/Forms/FormView.styled";
import MarkdowTextEditor from "../../../../../../../components/TextEditor/MarkdowTextEditor";
import { requiredMessage } from "../../../../../../../config/ValidationMessage";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";

const FormPlainte = ({
  defaultValues = plaintDefaultValues,
  submitValues = () => {},
  process = false,
  labelSubmit = "Déposer",
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(plaintsResolver),
  });

  const handleChangeText = (value) => {
    if (errors.depositionText) clearErrors("depositionText");
    setValue("depositionText", value);
  };

  const submit = (values) => {
    if (!values.depositionText) {
      setError("depositionText", { message: requiredMessage });
      return;
    }

    submitValues(values);
  };

  return (
    <FormContainer className="form-theme-color" onSubmit={handleSubmit(submit)}>
      <FormControl>
        <label htmlFor="depository">Dépositaire</label>
        <input
          type="text"
          {...register("depository")}
          placeholder="Prénom Nom"
        />

        <ErrorSection>
          {errors.depository && (
            <small className="text-error">{errors.depository.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="accused">Accusé</label>
        <input type="text" {...register("accused")} placeholder="Prénom Nom" />

        <ErrorSection>
          {errors.accused && (
            <small className="text-error">{errors.accused.message}</small>
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
          {errors.depositionText && (
            <small className="text-error">
              {errors.depositionText.message}
            </small>
          )}
        </ErrorSection>
      </FormControl>

      <ModalFooter>
        <ButtonWithLoader
          labelButton={labelSubmit}
          isLoading={process}
          className="bg-btn-theme-color"
          type="submit"
        />
      </ModalFooter>
    </FormContainer>
  );
};

export default FormPlainte;
