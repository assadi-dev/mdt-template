import React from "react";
import { typeOfArmesEnum } from "../listsOfView";
import { useForm } from "react-hook-form";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../components/Forms/FormView.styled";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";
import { weaponEncodingResolver } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import debounce from "debounce";
import { fetchUserbyIdentification } from "../../helpers";

const WeaponForm = ({ process = false, submitForm = () => {} }) => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    getValues,
    clearErrors,

    formState: { errors },
  } = useForm({ resolver: yupResolver(weaponEncodingResolver) });
  const handleChangeIdentification = async (e) => {
    const value = e.target.value;
    errors.identificationNumber && clearErrors("identificationNumber");
    try {
      if (!value) return;
      const res = await fetchUserbyIdentification(value);

      if (res.data?.id) {
        const civil = res.data;
        setValue("lastname", civil.lastname);
        setValue("firstname", civil.firstname);
        setValue("civil", `/api/civils/${civil.id}`);
      }
    } catch (error) {
      setError("identificationNumber", {
        message: "Aucun civil correspond à ce numero d'identification",
      });
    }
  };

  const submitValue = (values) => {
    submitForm(values);
  };

  return (
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
      <FormControl>
        <label htmlFor="firstname">Prénom</label>
        <input type="text" {...register("firstname")} />
        <ErrorSection>
          {errors.firstname && (
            <small className="text-error">{errors.firstname.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="lastname">Nom</label>
        <input type="text" {...register("lastname")} />
        <ErrorSection>
          {errors.lastname && (
            <small className="text-error">{errors.lastname.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="type">Type d'arme</label>
        <select {...register("type", { required: true })}>
          {typeOfArmesEnum.map((type) => (
            <option key={type.id} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        <ErrorSection>
          {errors.type && (
            <small className="text-error">{errors.type.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="serialNumber">Numéro de série</label>
        <input type="text" {...register("serialNumber")} />
        <ErrorSection>
          {errors.serialNumber && (
            <small className="text-error">{errors.serialNumber.message}</small>
          )}
        </ErrorSection>
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
  );
};

export default WeaponForm;
