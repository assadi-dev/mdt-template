import React, { useEffect } from "react";
import useProcess from "../../../../../../hooks/useProcess";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  FormControl,
  HeaderModal,
  ModalFooter,
  ModalFormContainer,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import ButtonWithLoader from "../../../../../../components/Button/ButtonWithLoader";
import { typeOfArmesEnum } from "../../../../Mdt/Encodage/Armes/View/listsOfView";
import {
  toastError,
  toastSuccess,
} from "../../../../../../services/utils/alert";
import { useDispatch } from "react-redux";
import { addServiceWeaponEncoding } from "../../../../../../features/ServiceWeaponEncoding/ServiceWeaponEncoding.slice";
import { postServiceWeaponEncoding } from "../../helpers";
import useGetAgentByMatricule from "../../../../../../hooks/useGetAgentByMatricule";

const EncodageArmeFonctionForm = ({ onCloseModal, payload, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();

  const defaultValues = {
    agent: `api/agents/${payload?.idAgent}`,
    matricule: payload?.matricule,
    lastname: payload?.lastname,
    firstname: payload?.firstname,
    type: "",
    serialNumber: "",
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm({ defaultValues });

  const { fetchData } = useGetAgentByMatricule();

  const submitFormArme = async (values) => {
    try {
      toggleProcess();

      const agent = await fetchData(values.matricule);
      let payload = {
        ...values,
        firstname: agent?.firstname,
        lastname: agent?.lastname,
        agent: `api/agents/${agent?.idAgent}`,
      };
      const res = await postServiceWeaponEncoding(payload);
      dispatch(addServiceWeaponEncoding({ ...res.data, ...payload }));
      toastSuccess();
    } catch (error) {
      // console.log(error);
      toastError();
    } finally {
      toggleProcess();
      onCloseModal();
    }
  };

  return (
    <>
      <ModalFormContainer {...props} onSubmit={handleSubmit(submitFormArme)}>
        <HeaderModal>
          <h2 className="form-title">Encoder une arme de fonction </h2>
          <CloseModalBtn className="close-section" onClick={onCloseModal} />
        </HeaderModal>
        <FormContainer className="form-theme-color">
          <FormControl>
            <label htmlFor="matricule">Matricule</label>
            <input type="text" {...register("matricule", { required: true })} />
          </FormControl>
          <FormControl>
            <label htmlFor="firstname">Prénom</label>
            <input type="text" {...register("firstname", { required: true })} />
          </FormControl>
          <FormControl>
            <label htmlFor="name">Nom</label>
            <input type="text" {...register("lastname", { required: true })} />
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
          </FormControl>
          <FormControl>
            <label htmlFor="serialNumber">Numéro de série</label>
            <input
              type="text"
              {...register("serialNumber", { required: true })}
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

export default EncodageArmeFonctionForm;
