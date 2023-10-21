import React from "react";
import { formAtrributionVehicule } from "../ListOfViews";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../components/Forms/FormView.styled";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";

const FormAttributionVehicule = ({
  defaultFormValues = formAtrributionVehicule,
  onSaveAttribution,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: defaultFormValues });

  const onSave = (values) => {
    onSaveAttribution(values);
  };

  const inputOption = {
    required: true,
  };

  return (
    <FormContainer className="form-theme-color" onSubmit={handleSubmit(onSave)}>
      <FormControl>
        <label htmlFor="">Matricule</label>
        <input placeholder="Ex: 103" {...register("matricule", inputOption)} />
      </FormControl>
      <FormControl>
        <label htmlFor="">Agent</label>
        <input
          placeholder="Ex: Alyson Finley"
          {...register("agent", inputOption)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="">Grade</label>
        <input placeholder="Ex: Sergent" {...register("grade", inputOption)} />
      </FormControl>
      <FormControl>
        <label htmlFor="">Type du vehicule</label>
        <input
          placeholder="Ex: buffalo Stx"
          {...register("typeVehicule", inputOption)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="">Plaque du véhicule</label>
        <input
          placeholder="Ex: 49GHT256"
          {...register("plaqueVehicule", inputOption)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="">ID du Véhicule</label>
        <input
          placeholder="Ex: 569810"
          {...register("idVehicule", inputOption)}
        />
      </FormControl>

      <ModalFooter>
        <ButtonWithLoader
          labelButton={"Ajouter"}
          className="bg-btn-theme-color"
          type="submit"
        />
      </ModalFooter>
    </FormContainer>
  );
};

export default FormAttributionVehicule;
