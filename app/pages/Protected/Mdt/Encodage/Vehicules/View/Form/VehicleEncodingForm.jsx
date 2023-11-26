import React from "react";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  FormControl,
  ModalFooter,
  UploadFormZoneContainer,
} from "../../../../../../../components/Forms/FormView.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { vehicleEncodingSchema } from "./schema";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";

const VehicleEncodingForm = ({ process = false, submitForm = () => {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(vehicleEncodingSchema) });

  const submitValue = (values) => {
    submitForm(values);
  };

  return (
    <>
      <FormContainer
        className="form-theme-color"
        onSubmit={handleSubmit(submitValue)}
      >
        <FormControl>
          <label htmlFor="firstname">Prénom</label>
          <input type="text" {...register("firstname")} />
        </FormControl>
        <FormControl>
          <label htmlFor="lastname">Nom</label>
          <input type="text" {...register("lastname")} />
        </FormControl>
        <FormControl>
          <label htmlFor="type">Type de véhicule</label>
          <input type="text" {...register("type")} />
        </FormControl>
        <FormControl>
          <label htmlFor="immatriculation">Plaque d’immatriculation </label>
          <input
            type="text"
            {...register("immatriculation", { required: true })}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="">Photo carte grise</label>
          <UploadFormZoneContainer></UploadFormZoneContainer>
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
    </>
  );
};

export default VehicleEncodingForm;
