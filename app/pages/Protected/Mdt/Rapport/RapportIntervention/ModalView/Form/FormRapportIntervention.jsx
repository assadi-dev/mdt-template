import React from "react";
import {
  defaultFormValues,
  inputOption,
  interventionReportResolver,
} from "./helpers";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";
import useProcess from "../../../../../../../hooks/useProcess";
import { useForm } from "react-hook-form";
import {
  FormRapportInterventionContainer,
  RapportTextEditor,
} from "../../RapportIntervention.styled";
import {
  ErrorSection,
  FormControl,
  ModalFooter,
} from "../../../../../../../components/Forms/FormView.styled";
import { yupResolver } from "@hookform/resolvers/yup";

const FormRapportIntervention = ({
  labelSaveButton = "Ajouter",
  defaultValues = defaultFormValues,
  process = false,
  submitValues = () => {},
}) => {
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
    setError,
    clearErrors,
    reset,
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: yupResolver(interventionReportResolver),
  });

  const handleChangeRapport = (value) => {
    if (errors.commentText) clearErrors("commentText");
    setValue("commentText", value);
  };

  const save = (values) => {
    if (!values.commentText) {
      setError("commentText");
      return false;
    }

    submitValues(values);
  };

  return (
    <FormRapportInterventionContainer
      className="form-theme-color"
      onSubmit={handleSubmit(save)}
    >
      <FormControl>
        <label htmlFor="officiersImplicated">Officiers impliqués</label>
        <input type="text" {...register("officiersImplicated")} autoFocus />
        <ErrorSection>
          {errors.officiersImplicated && (
            <small className="text-error">
              {errors.officiersImplicated.message}
            </small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="interventionType">Type d'incident</label>
        <input
          type="text"
          placeholder="Ex: usage d'arme à feu"
          {...register("interventionType")}
        />
        <ErrorSection>
          {errors.interventionType && (
            <small className="text-error">
              {errors.interventionType.message}
            </small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="location">Emplacement D'incident</label>
        <input type="text" {...register("location")} />
        <ErrorSection>
          {errors.location && (
            <small className="text-error">{errors.location.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="">Corps incident</label>
        <RapportTextEditor
          className="theme-text-editor"
          getOutput={handleChangeRapport}
          defaultValue={getValues("commentText")}
        />
        <ErrorSection>
          {errors.commentText && (
            <small className="text-error">{errors.commentText.message}</small>
          )}
        </ErrorSection>
      </FormControl>

      <ModalFooter>
        <ButtonWithLoader
          labelButton={labelSaveButton}
          isLoading={process}
          className="bg-btn-theme-color"
          type="submit"
        />
      </ModalFooter>
    </FormRapportInterventionContainer>
  );
};

export default FormRapportIntervention;
