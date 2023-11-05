import React from "react";
import useProcess from "../../../../../../../hooks/useProcess";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  FormControl,
  HeaderModal,
  ModalFooter,
  ModalFormContainer,
  SubmitButton,
} from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import { typeOfArmesEnum } from "../listsOfView";
import SpinnerButton from "../../../../../../../components/Shared/Loading/SpinnerButton";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";
import { useDispatch } from "react-redux";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";

const EncodeArmeForm = ({ onCloseModal, payload, ...props }) => {
  const { process, toggleProcess } = useProcess();

  const dispatch = useDispatch();

  const defaultValues = {
    civil: "",
    firstname: "",
    lastname: "",
    serialNumber: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const submitFormArme = (values) => {
    try {
      toggleProcess();

      let payload = { ...values };

      toastSuccess();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <>
      <ModalFormContainer {...props} onSubmit={handleSubmit(submitFormArme)}>
        <HeaderModal>
          <h2 className="form-title">Encoder une arme </h2>
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
            <label htmlFor="typeArme">Type d'arme</label>
            <select {...register("typeArme", { required: true })}>
              {typeOfArmesEnum.map((type) => (
                <option key={type.id} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </FormControl>
          <FormControl>
            <label htmlFor="numeroSerie">Numéro de série</label>
            <input
              type="text"
              {...register("numeroSerie", { required: true })}
            />
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

export default EncodeArmeForm;
