import React from "react";
import { EowFormContainer, TextEOWCOntent } from "../../Effectifs.styled";
import {
  ErrorSection,
  FormControl,
  ModalFooter,
} from "../../../../../../components/Forms/FormView.styled";
import ButtonWithLoader from "../../../../../../components/Button/ButtonWithLoader";
import { useForm } from "react-hook-form";
import { eowFormResolver, eowFormValue } from "./effectifResolver";
import { yupResolver } from "@hookform/resolvers/yup";
import { requiredMessage } from "../../../../../../config/ValidationMessage";

const FormEOW = ({
  labelSubmitBtn,
  onSubmitValues = () => {},
  defaultValues = eowFormValue,
  process = false,
  ...props
}) => {
  const handlegetContentText = (value) => {
    if (errors.reason) clearErrors("reason");
    setValue("reason", value);
  };

  const TEXT_BTN = labelSubmitBtn || "Enregistrer";

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(eowFormResolver),
  });

  const submitValue = (values) => {
    if (!values.reason) {
      setError("reason", { message: requiredMessage });
      return;
    }
    onSubmitValues(values);
  };

  return (
    <EowFormContainer
      className="form-theme-color"
      onSubmit={handleSubmit(submitValue)}
    >
      <FormControl className="mb-1">
        <label htmlFor="dateEow">Date end of watch </label>
        <input type="datetime-local" {...register("date")} />
        <ErrorSection>
          {errors.date && (
            <small className="text-error">{errors.date.message}</small>
          )}
        </ErrorSection>
      </FormControl>

      <FormControl className="mb-1">
        <label htmlFor="dateEow ">Cause de la mort</label>
        <TextEOWCOntent
          className="theme-text-editor m-0"
          getOutput={handlegetContentText}
          defaultValue={getValues("reason")}
        />
        <ErrorSection>
          {errors.reason && (
            <small className="text-error">{errors.reason.message}</small>
          )}
        </ErrorSection>
      </FormControl>

      <ModalFooter>
        <ButtonWithLoader
          labelButton={TEXT_BTN}
          className="bg-btn-theme-color"
          isLoading={process}
        />
      </ModalFooter>
    </EowFormContainer>
  );
};

export default FormEOW;
