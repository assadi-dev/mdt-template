import React from "react";
import {
  AddBtn,
  BodyContainer,
  BodyGridForm,
  ContentContainer,
  HeaderGridForm,
} from "../../Civils.styled";
import {
  FormContainer,
  FormControl,
  HeaderModal,
  ModalFooter,
  SubmitButton,
} from "../../../../../../../components/Forms/FormView.styled";
import { CloseBtnContainer } from "../../../../../../../components/Modal/Modal.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import { useForm } from "react-hook-form";
import SpinnerButton from "../../../../../../../components/Shared/Loading/SpinnerButton";
import useProcess from "../../../../../../../hooks/useProcess";
import CivilFormPhoto from "./CivilFormphoto";

const EncodeCivilForm = ({ onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();

  const defaultValues = {
    name: "",
    firstname: "",
    birthOfDate: "",
    adress: "",
    phone: "",
    nationality: "",
    affiliation: "",
    job: "",
    hairColor: "",
    ethnie: "",
    licence: "none",
    gender: "homme",
    identification: "",
    ppa: "non",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <ContentContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Encoder un civil </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
        <CloseBtnContainer />
      </HeaderModal>
      <BodyContainer>
        <FormContainer className="form-theme-color">
          <HeaderGridForm>
            <div className="start">
              <FormControl>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Nom"
                />
              </FormControl>
              <FormControl>
                <label htmlFor="firstname">Prénom</label>
                <input
                  type="text"
                  {...register("firstname", { required: true })}
                  placeholder="Prénom"
                />
              </FormControl>
              <FormControl>
                <label htmlFor="birthOfDate">Date de naissance</label>
                <input
                  type="date"
                  {...register("birthOfDate", { required: true })}
                  placeholder="Date de naissance"
                />
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
                  {...register("nationality", { required: true })}
                  placeholder="Nationalité"
                />
              </FormControl>
            </div>
            <div className="end">
              <FormControl>
                <label htmlFor="ethnie">Ethnie</label>
                <input
                  type="text"
                  {...register("ethnie", { required: true })}
                  placeholder="Ethnie"
                />
              </FormControl>
            </div>
          </BodyGridForm>

          <BodyGridForm>
            <div className="start">
              <FormControl>
                <label htmlFor="hairColor">Couleur des cheuveux</label>
                <input
                  type="text"
                  {...register("hairColor", { required: true })}
                  placeholder="Couleur des cheuveux"
                />
              </FormControl>
            </div>
            <div className="end">
              <FormControl>
                <label htmlFor="gender">Genre</label>
                <select {...register("gender")}>
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                </select>
              </FormControl>
            </div>
          </BodyGridForm>
          <BodyGridForm>
            <div className="start">
              <FormControl>
                <label htmlFor="job">Emploie</label>
                <input
                  type="text"
                  {...register("job", { required: true })}
                  placeholder="Emploie"
                />
              </FormControl>
            </div>
            <div className="end">
              <FormControl>
                <label htmlFor="affiliation">Affiliation</label>
                <input
                  type="text"
                  {...register("affiliation", { required: true })}
                  placeholder="Affiliation"
                />
              </FormControl>
            </div>
          </BodyGridForm>
          <BodyGridForm>
            <div className="start">
              <FormControl>
                <label htmlFor="ppa">PPA</label>
                <select {...register("ppa")}>
                  <option value="oui">OUI</option>
                  <option value="non">Non</option>
                </select>
              </FormControl>
            </div>
            <div className="end">
              <FormControl>
                <label htmlFor="gender">Permis B</label>
                <select {...register("licence")}>
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
                <label htmlFor="nationality">Numéro de téléphone</label>
                <input
                  type="text"
                  {...register("nationality", { required: true })}
                  placeholder="Numéro de téléphone"
                />
              </FormControl>
            </div>
            <div className="end">
              <FormControl>
                <label htmlFor="gender">Numéro d'identification</label>
                <input
                  type="text"
                  {...register("nationality", { required: true })}
                  placeholder="Numéro d'identification"
                />
              </FormControl>
            </div>
          </BodyGridForm>
          <FormControl>
            <label htmlFor="adress">Adresse</label>
            <textarea
              type="text"
              {...register("adress", { required: true })}
              placeholder="Adresse"
              rows={2}
            />
          </FormControl>

          <ModalFooter>
            <SubmitButton className="bg-btn-theme-color" type="submit">
              Ajouter
              {process && <SpinnerButton className="loading-process" />}
            </SubmitButton>
          </ModalFooter>
        </FormContainer>
      </BodyContainer>
    </ContentContainer>
  );
};

export default EncodeCivilForm;
