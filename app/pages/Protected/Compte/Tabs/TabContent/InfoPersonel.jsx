import React, { useEffect } from "react";
import {
  FormBottom,
  PhoneContainer,
  RowInput,
  UserFormContainer,
} from "./InfoPersonel.style";
import {
  FormControl,
  SubmitButton,
} from "../../../../../components/Forms/FormView.styled";
import ButtonWithLoader from "../../../../../components/Button/ButtonWithLoader";
import useProcess from "../../../../../hooks/useProcess";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { hydrateUser } from "../../../../../features/Authenticate/Athenticate.slice";
import { toastError, toastSuccess } from "../../../../../services/utils/alert";
import { updateUser } from "../../helper";

const InfoPersonel = () => {
  const { process, toggleProcess } = useProcess();

  const {
    idAgent,
    iban,
    division,
    phone,
    lastname,
    firstname,
    grade,
    matricule,
  } = useSelector((state) => state.AuthenticateReducer);

  const defaultValues = {
    lastname: "",
    firstname: "",
    matricule: "",
    iban: "",
    division: "",
    phone: "",
  };

  const required = true;

  const { handleSubmit, register, reset } = useForm({ defaultValues });
  const dispatch = useDispatch();

  useEffect(() => {
    reset({
      ...defaultValues,
      idAgent,
      iban,
      division,
      phone,
      lastname,
      firstname,
      grade,
      matricule,
    });
  }, [idAgent]);

  const onSubmit = async (values) => {
    toggleProcess();
    try {
      const {
        idAgent,
        iban,
        division,
        phone,
        lastname,
        firstname,
        grade,
        matricule,
      } = values;

      const res = await updateUser(idAgent, {
        iban,
        division,
        phone,
        lastname,
        firstname,

        matricule,
      });

      dispatch(
        hydrateUser({
          iban,
          division,
          phone,
          lastname,
          firstname,
          matricule,
        })
      );
      toastSuccess("Profile mise à jour");
    } catch (error) {
      toastError();
    }
    toggleProcess();
  };

  return (
    <UserFormContainer className="form-bg-theme-color form-theme-color">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <label htmlFor="">N°Matricule </label>
          <input type="text" {...register("matricule", { required })} />
        </FormControl>
        <FormControl>
          <label htmlFor="">IBAN </label>
          <input type="text" {...register("iban", { required })} />
        </FormControl>
        <FormControl>
          <label htmlFor="">Division </label>
          <select {...register("division", { required })}>
            <option value="test">test</option>
          </select>
        </FormControl>
        <RowInput>
          <FormControl>
            <label htmlFor="">Nom </label>
            <input type="text" {...register("lastname", { required })} />
          </FormControl>
          <FormControl>
            <label htmlFor="">Prénom </label>
            <input type="text" {...register("firstname", { required })} />
          </FormControl>
        </RowInput>

        <PhoneContainer>
          <label htmlFor="">Téléphone </label>
          <input type="text" {...register("phone", { required })} />
        </PhoneContainer>

        <FormBottom>
          <ButtonWithLoader
            labelButton="Mettre à jour"
            className="bg-btn-theme-color"
            isLoading={process}
          />
        </FormBottom>
      </form>
    </UserFormContainer>
  );
};

export default InfoPersonel;
