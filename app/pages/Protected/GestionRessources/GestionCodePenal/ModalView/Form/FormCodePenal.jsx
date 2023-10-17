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

const values = {
  id: "",
  label: "",
  categorie: "",
  amount: "",
  peine: "",
};

const FormCodePenal = ({
  defaultValues = values,
  labelValidation = "Ajouter",
  handleSave = () => {},
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
  });

  const options = {
    required: true,
  };

  const handSelectCategorie = (categorie) => {
    if (errors.categorie) clearErrors("categorie");
    const { value } = categorie;
    setValue("categorie", value);
  };

  const submit = (values) => {
    if (!values.categorie) {
      setError("categorie");
      return false;
    }
    handleSave(values);
  };

  return (
    <FormCodePenalContainer
      className="form-theme-color"
      onSubmit={handleSubmit(submit)}
    >
      <FormControl>
        <label htmlFor="label">Nom</label>
        <input
          placeholder="Nom de l'infraction"
          {...register("label", options)}
        />
        <ErrorSection>
          {errors.label && (
            <small className="text-error">
              Veuillez renseigner le nom de l'infraction
            </small>
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
          value={defaultValues.categorie}
        />
        <ErrorSection>
          {errors.categorie && (
            <small className="text-error">
              Veuillez renseigner la catégorie de l'infraction
            </small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="amount">Amende</label>
        <input
          type="text"
          placeholder="Ex: 3000"
          {...register("amount", options)}
        />
        <ErrorSection>
          {errors.amount && (
            <small className="text-error">
              Veuillez renseigner le montant de l'amende
            </small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="peine">Peine</label>
        <input
          type="text"
          placeholder="EX: HH:MM"
          {...register("peine", options)}
        />
        <ErrorSection>
          {errors.peine && (
            <small className="text-error">
              Veuillez renseigner la durée de peine "HH:MM"
            </small>
          )}
        </ErrorSection>
      </FormControl>
      <ModalFooter>
        <ButtonWithLoader
          labelButton={labelValidation}
          className="bg-btn-theme-color"
        />
      </ModalFooter>
    </FormCodePenalContainer>
  );
};

export default FormCodePenal;
