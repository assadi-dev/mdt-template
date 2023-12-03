import React from "react";
import {
  defaultFormValues,
  incidentReportResolver,
  inputOption,
} from "./helpers";
import {
  ErrorSection,
  FormControl,
  ModalFooter,
} from "../../../../../../../components/Forms/FormView.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";
import { useForm } from "react-hook-form";
import {
  FormRapportIncidentContainer,
  RapportTextEditor,
} from "../../Rapportincident.styled";

const FormRapportIncident = ({
  labelSaveButton = "Ajouter",
  defaultValues = defaultFormValues,
  submitValue = () => {},
  process = false,
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
  } = useForm({ defaultValues, resolver: yupResolver(incidentReportResolver) });

  const handleChangeRapport = (value) => {
    if (errors.commentText) clearErrors("commentText");
    setValue("commentText", value);
  };

  const save = (values) => {
    if (!values.commentText) {
      setError("commentText");
      return false;
    }

    submitValue(values);
  };

  return (
    <FormRapportIncidentContainer
      className="form-theme-color"
      onSubmit={handleSubmit(save)}
    >
      <FormControl>
        <label htmlFor="officerImplicated">Officiers impliqués</label>
        <input type="text" {...register("officerImplicated")} autoFocus />
        <ErrorSection>
          {errors.officerImplicated && (
            <small className="text-error">
              {errors.officerImplicated.message}
            </small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="incidentType">Type d'incident</label>
        <input
          type="text"
          placeholder="Ex: usage d'arme à feu"
          {...register("incidentType")}
        />
        <ErrorSection>
          {errors.incidentType && (
            <small className="text-error">{errors.incidentType.message}</small>
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
        <label htmlFor="commentText">Corps incident</label>
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
    </FormRapportIncidentContainer>
  );
};

export default FormRapportIncident;
