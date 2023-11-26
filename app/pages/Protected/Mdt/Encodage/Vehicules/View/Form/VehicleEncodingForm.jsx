import React from "react";
import { useForm } from "react-hook-form";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  ModalFooter,
  UploadFormZoneContainer,
} from "../../../../../../../components/Forms/FormView.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { vehicleEncodingSchema } from "./schema";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";
import debounce from "debounce";
import { fetchUserbyIdentification } from "../../../../../../../services/utils/user";

const VehicleEncodingForm = ({ process = false, submitForm = () => {} }) => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(vehicleEncodingSchema) });

  const handleChangeIdentification = async (e) => {
    const value = e.target.value;
    errors.identificationNumber && clearErrors("identificationNumber");
    try {
      if (!value) return;
      const res = await fetchUserbyIdentification(value);
      console.log(res);

      if (res.data?.id) {
        const civil = res.data;
        setValue("lastname", civil.lastname);
        setValue("firstname", civil.firstname);
        setValue("civil", `/api/civils/${civil.id}`);
      }
    } catch (error) {
      setValue("lastname", "");
      setValue("firstname", "");
      setValue("civil", null);
      setError("identificationNumber", {
        message: "Aucun civil correspond à ce numero d'identification",
      });
    }
  };

  const submitValue = (values) => {
    if (!getValues("civil")) {
      setError("identificationNumber", {
        message: "Aucun civil correspond à ce numero d'identification",
      });
      return;
    }
    submitForm(values);
  };

  return (
    <>
      <FormContainer
        className="form-theme-color"
        onSubmit={handleSubmit(submitValue)}
      >
        <FormControl>
          <label htmlFor="identificationNumber">N° Identification</label>
          <input
            type="text"
            {...register("identificationNumber")}
            onChange={debounce(handleChangeIdentification, 1000)}
          />
          <ErrorSection>
            {errors.identificationNumber && (
              <small className="text-error">
                {errors.identificationNumber.message}
              </small>
            )}
          </ErrorSection>
        </FormControl>
        {watch("firstname") && (
          <FormControl>
            <label htmlFor="firstname">Prénom</label>
            <input type="text" {...register("firstname")} readOnly />
            <ErrorSection>
              {errors.firstname && (
                <small className="text-error">{errors.firstname.message}</small>
              )}
            </ErrorSection>
          </FormControl>
        )}
        {watch("lastname") && (
          <FormControl>
            <label htmlFor="lastname">Nom</label>
            <input type="text" {...register("lastname")} readOnly />
            <ErrorSection>
              {errors.lastname && (
                <small className="text-error">{errors.lastname.message}</small>
              )}
            </ErrorSection>
          </FormControl>
        )}

        <FormControl>
          <label htmlFor="type">Type de véhicule</label>
          <input type="text" {...register("type")} />
          <ErrorSection>
            {errors.type && (
              <small className="text-error">{errors.type.message}</small>
            )}
          </ErrorSection>
        </FormControl>

        <FormControl>
          <label htmlFor="immatriculation">Plaque d’immatriculation </label>
          <input
            type="text"
            {...register("immatriculation", { required: true })}
          />
          <ErrorSection>
            {errors.immatriculation && (
              <small className="text-error">
                {errors.immatriculation.message}
              </small>
            )}
          </ErrorSection>
        </FormControl>
        {/*       <FormControl>
          <label htmlFor="">Photo carte grise</label>
          <UploadFormZoneContainer></UploadFormZoneContainer>
        </FormControl> */}

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
