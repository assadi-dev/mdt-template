import React from "react";
import useProcess from "../../../../../../../hooks/useProcess";
import { useForm } from "react-hook-form";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import {
  FormContainer,
  FormControl,
  HeaderModal,
  ModalFooter,
  ModalFormContainer,
  UploadFormZoneContainer,
} from "../../../../../../../components/Forms/FormView.styled";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";
import { typeOfVehiculesEnum } from "../listOfView";

const EncodeFormVehicule = ({ onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();

  const defaultValues = {
    name: "",
    firstname: "",
    typeVehicules: "",
    immatriculation: "",
    photo: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const submitFormArme = (values) => {
    toggleProcess();
    console.log(values);
  };

  return (
    <>
      <ModalFormContainer {...props} onSubmit={handleSubmit(submitFormArme)}>
        <HeaderModal>
          <h2 className="form-title">Encoder un véhicule </h2>
          <CloseModalBtn className="close-section" onClick={onCloseModal} />
        </HeaderModal>
        <FormContainer className="form-theme-color">
          <FormControl>
            <label htmlFor="firstname">Prénom</label>
            <input type="text" {...register("firstname", { required: true })} />
          </FormControl>
          <FormControl>
            <label htmlFor="name">Nom</label>
            <input type="text" {...register("name", { required: true })} />
          </FormControl>
          <FormControl>
            <label htmlFor="typeVehicules">Type de véhicule</label>
            <input
              type="text"
              {...register("typeVehicules", { required: true })}
            />
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
      </ModalFormContainer>
    </>
  );
};

export default EncodeFormVehicule;
