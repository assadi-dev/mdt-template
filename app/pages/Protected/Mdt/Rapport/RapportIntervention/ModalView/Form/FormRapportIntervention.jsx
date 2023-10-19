import React from "react";
import { defaultFormValues, inputOption } from "./helpers";
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

const FormRapportIntervention = ({
  labelSaveButton = "Ajouter",
  defaultValues = null,
  onSave = () => {},
}) => {
  const { process, toggleProcess } = useProcess();

  const {
    register,
    getValues,
    setValue,
    formState: { errors },
    setError,
    clearErrors,
    reset,
    handleSubmit,
  } = useForm({ defaultValues: { ...defaultFormValues, ...defaultValues } });

  const handleChangeRapport = (value) => {
    if (errors.corpsIncident) clearErrors("corpsIncident");
    setValue("corpsIncident", value);
  };

  const save = (values) => {
    if (!values.corpsIncident) {
      setError("corpsIncident");
      return false;
    }
    try {
      toggleProcess();
      onSave(values);
    } catch (error) {
      toggleProcess();
    }
  };

  return (
    <FormRapportInterventionContainer
      className="form-theme-color"
      onSubmit={handleSubmit(save)}
    >
      <FormControl>
        <label htmlFor="officierimplique">Officiers impliqués</label>
        <input
          type="text"
          {...register("officierimplique", inputOption)}
          autoFocus
        />
        <ErrorSection>
          {errors.officierimplique && (
            <small className="text-error">
              veuillez renseigner les officiers impliqués
            </small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="typeIncident">Type d'incident</label>
        <input
          type="text"
          placeholder="Ex: usage d'arme à feu"
          {...register("typeIncident", inputOption)}
        />
        <ErrorSection>
          {errors.typeIncident && (
            <small className="text-error">
              veuillez renseigner le type d'incident
            </small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="emplacement">Emplacement D'incident</label>
        <input type="text" {...register("emplacement", inputOption)} />
        <ErrorSection>
          {errors.emplacement && (
            <small className="text-error">
              veuillez renseigner l'emplacement
            </small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="">Corps incident</label>
        <RapportTextEditor
          className="theme-text-editor"
          getOutput={handleChangeRapport}
          defaultValue={getValues("corpsIncident")}
        />
        <ErrorSection>
          {errors.corpsIncident && (
            <small className="text-error">veuillez remplir le corps</small>
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