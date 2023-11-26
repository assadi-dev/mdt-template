import React from "react";
import {
  AddBtn,
  BodyContainer,
  BodyGridForm,
  ContentContainer,
  HeaderGridForm,
} from "../../Civils.styled";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  HeaderModal,
  ModalFooter,
  SubmitButton,
} from "../../../../../../../components/Forms/FormView.styled";
import SpinnerButton from "../../../../../../../components/Shared/Loading/SpinnerButton";

import CivilFormPhoto from "./CivilFormphoto";
import { useForm } from "react-hook-form";
import { civilDefaultValues, civilResolver } from "./Schemas";

import { yupResolver } from "@hookform/resolvers/yup";

const CivilForm = ({
  defaultValues = { ...civilDefaultValues },
  submitValues = () => {},
  process = false,
  labelSubmit = "Ajouter",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(civilResolver) });

  const submitCivil = (values) => {
    submitValues(values);
  };

  return (
    <FormContainer
      className="form-theme-color"
      onSubmit={handleSubmit(submitCivil)}
    >
      <HeaderGridForm>
        <div className="start">
          <FormControl>
            <label htmlFor="lastname">Nom</label>
            <input type="text" {...register("lastname")} placeholder="Nom" />
            <ErrorSection>
              {errors.lastname && (
                <small className={`text-error`}>
                  {errors.lastname.message}
                </small>
              )}
            </ErrorSection>
          </FormControl>
          <FormControl>
            <label htmlFor="firstname">Prénom</label>
            <input
              type="text"
              {...register("firstname")}
              placeholder="Prénom"
            />
            <ErrorSection>
              {errors.firstname && (
                <small className="text-error">{errors.firstname.message}</small>
              )}
            </ErrorSection>
          </FormControl>
          <FormControl>
            <label htmlFor="birthdate">Date de naissance</label>
            <input
              type="date"
              {...register("birthdate")}
              placeholder="Date de naissance"
            />
            <ErrorSection>
              {errors.birthdate && (
                <small className="text-error">{errors.birthdate.message}</small>
              )}
            </ErrorSection>
          </FormControl>
        </div>
        <div className="d-grid  end">
          <CivilFormPhoto />
        </div>
      </HeaderGridForm>

      {/** Form Body **/}
      <BodyGridForm>
        <div className="start">
          <FormControl>
            <label htmlFor="nationality">Nationalité</label>
            <input
              type="text"
              {...register("nationality")}
              placeholder="Nationalité"
            />
            <ErrorSection>
              {errors.nationality && (
                <small className="text-error">
                  {errors.nationality.message}
                </small>
              )}
            </ErrorSection>
          </FormControl>
        </div>
        <div className="end">
          <FormControl>
            <label htmlFor="ethnie">Ethnie</label>
            <input type="text" {...register("ethnie")} placeholder="Ethnie" />
            <ErrorSection>
              {errors.ethnie && (
                <small className="text-error">{errors.ethnie.message}</small>
              )}
            </ErrorSection>
          </FormControl>
        </div>
      </BodyGridForm>

      <BodyGridForm>
        <div className="start">
          <FormControl>
            <label htmlFor="hairColor">Couleur des cheuveux</label>
            <input
              type="text"
              {...register("hairColor")}
              placeholder="Couleur des cheuveux"
            />
            <ErrorSection>
              {errors.hairColor && (
                <small className="text-error">{errors.hairColor.message}</small>
              )}
            </ErrorSection>
          </FormControl>
        </div>
        <div className="end">
          <FormControl>
            <label htmlFor="gender">Genre</label>
            <select {...register("gender")}>
              <option value="male">Homme</option>
              <option value="female">Femme</option>
            </select>
          </FormControl>
        </div>
      </BodyGridForm>
      <BodyGridForm>
        <div className="start">
          <FormControl>
            <label htmlFor="job">Emploie</label>
            <input type="text" {...register("job")} placeholder="Emploie" />
            {errors.job && (
              <small className="text-error">{errors.job.message}</small>
            )}
          </FormControl>
        </div>
        <div className="end">
          <FormControl>
            <label htmlFor="affiliation">Affiliation</label>
            <input
              type="text"
              {...register("affiliation")}
              placeholder="Affiliation"
            />
            <ErrorSection>
              {errors.affiliation && (
                <small className="text-error">
                  {errors.affiliation.message}
                </small>
              )}
            </ErrorSection>
          </FormControl>
        </div>
      </BodyGridForm>
      <BodyGridForm>
        <div className="start">
          <FormControl>
            <label htmlFor="ppa">PPA</label>
            <select {...register("ppa")}>
              <option value={true}>OUI</option>
              <option value={false}>Non</option>
            </select>
          </FormControl>
        </div>
        <div className="end">
          <FormControl>
            <label htmlFor="driveLicence">Permis B</label>
            <select {...register("driverLicence")}>
              <option value="none">Sans permis</option>
              <option value="valid">Valide</option>
              <option value="suspend">Suspendu</option>
              <option value="invalid">Non Valide</option>
            </select>
          </FormControl>
        </div>
      </BodyGridForm>

      <BodyGridForm>
        <div className="start">
          <FormControl>
            <label htmlFor="phone">Numéro de téléphone</label>
            <input
              type="text"
              {...register("phone")}
              placeholder="Numéro de téléphone"
            />
            <ErrorSection>
              {errors.phone && (
                <small className="text-error">{errors.phone.message}</small>
              )}
            </ErrorSection>
          </FormControl>
        </div>
        <div className="end">
          <FormControl>
            <label htmlFor="identificationNumber">
              Numéro d'identification
            </label>
            <input
              type="text"
              {...register("identificationNumber")}
              placeholder="Numéro d'identification"
            />
            <ErrorSection>
              {errors.identificationNumber && (
                <small className="text-error">
                  {errors.identificationNumber.message}
                </small>
              )}
            </ErrorSection>
          </FormControl>
        </div>
      </BodyGridForm>
      <FormControl>
        <label htmlFor="address">Adresse</label>
        <textarea
          type="text"
          {...register("address")}
          placeholder="Adresse"
          rows={2}
        />
        <ErrorSection>
          {errors.adress && (
            <small className="text-error">{errors.adress.message}</small>
          )}
        </ErrorSection>
      </FormControl>

      <ModalFooter>
        <SubmitButton className="bg-btn-theme-color" type="submit">
          {labelSubmit}
          {process && <SpinnerButton className="loading-process" />}
        </SubmitButton>
      </ModalFooter>
    </FormContainer>
  );
};

export default CivilForm;
