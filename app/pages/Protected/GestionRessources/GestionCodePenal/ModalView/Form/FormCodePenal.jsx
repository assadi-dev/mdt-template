import React from "react";
import { FormCodePenalContainer } from "../../GestionCodePenal.styled";
import { useForm } from "react-hook-form";
import {
  ErrorSection,
  FormControl,
  ModalFooter,
} from "../../../../../../components/Forms/FormView.styled";
import { Button } from "../../../../../../components/PageContainer";
import ButtonWithLoader from "../../../../../../components/Button/ButtonWithLoader";
import ReactDropdown from "react-dropdown";
import { codePenalCategories } from "../../../../../../config/options";
import { codePenalFormValue, codePenalResolver } from "./CodePenalResolver";
import { yupResolver } from "@hookform/resolvers/yup";

const FormCodePenal = ({
  defaultValues = codePenalFormValue,
  labelValidation = "Ajouter",
  process = false,
  onSubmitValues = () => {},
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
    setValue,
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(codePenalResolver),
  });

  const handSelectCategorie = (category) => {
    if (errors.category) clearErrors("category");
    const { value } = category;
    setValue("category", value);
  };

  const submit = (values) => {
    if (!values.category) {
      setError("category");
      return false;
    }
    onSubmitValues(values);
  };

  return (
    <FormCodePenalContainer
      className="form-theme-color"
      onSubmit={handleSubmit(submit)}
    >
      <FormControl>
        <label htmlFor="label">Nom</label>
        <input placeholder="Nom de l'infraction" {...register("label")} />
        <ErrorSection>
          {errors.label && (
            <small className="text-error">{errors.label.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="">Categorie</label>
        <ReactDropdown
          options={codePenalCategories}
          placeholder="selectionner une categorie"
          className="dropdown-select-custom"
          onChange={handSelectCategorie}
          value={getValues("category")}
        />
        <ErrorSection>
          {errors.category && (
            <small className="text-error">{errors.category.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="amount">Amende</label>
        <input type="text" placeholder="Ex: 3000" {...register("amount")} />
        <ErrorSection>
          {errors.amount && (
            <small className="text-error">{errors.amount.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="peine">Peine</label>
        <input type="text" placeholder="EX: HH:MM" {...register("sentence")} />
        <ErrorSection>
          {errors.sentence && (
            <small className="text-error">{errors.sentence.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <ModalFooter>
        <ButtonWithLoader
          labelButton={labelValidation}
          className="bg-btn-theme-color"
          isLoading={process}
        />
      </ModalFooter>
    </FormCodePenalContainer>
  );
};

export default FormCodePenal;
