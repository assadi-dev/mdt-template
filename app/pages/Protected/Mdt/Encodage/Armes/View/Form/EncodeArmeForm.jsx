import React from "react";
import useProcess from "../../../../../../../hooks/useProcess";
import { useForm } from "react-hook-form";
import {
  ErrorSection,
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
import { weaponEncodingResolver } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import WeaponForm from "./WeaponForm";
import { saveEncodingWeapon } from "../../helpers";
import { encodeCivilWeapon } from "../../../../../../../features/WeaponEncoding/WeaponEncoding.slice";

const EncodeArmeForm = ({ onCloseModal, payload, ...props }) => {
  const { process, toggleProcess } = useProcess();

  const dispatch = useDispatch();

  const submitFormArme = async (values) => {
    try {
      toggleProcess();
      let payload = { ...values };
      const res = await saveEncodingWeapon(payload);
      dispatch(encodeCivilWeapon(res.data));
      toastSuccess();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
      onCloseModal();
    }
  };

  return (
    <>
      <ModalFormContainer {...props}>
        <HeaderModal>
          <h2 className="form-title">Encoder une arme </h2>
          <CloseModalBtn className="close-section" onClick={onCloseModal} />
        </HeaderModal>
        <WeaponForm process={process} submitForm={submitFormArme} />
      </ModalFormContainer>
    </>
  );
};

export default EncodeArmeForm;
