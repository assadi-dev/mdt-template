import React from "react";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../components/Forms/FormView.styled";
import ButtonWithLoader from "../../../../../components/Button/ButtonWithLoader";
import MarkdowTextEditor from "../../../../../components/TextEditor/MarkdowTextEditor";
import useProcess from "../../../../../hooks/useProcess";
import { motion } from "framer-motion";
import { formAnimate } from "./Animation";
import { useDispatch } from "react-redux";
import { addAccountingRequestByPage } from "../../../../../features/AccountingRequest/AccountingRequest.slice";
import { postRequestAcuisition } from "./helpers";
import { toastError, toastSuccess } from "../../../../../services/utils/alert";

export const AddForm = ({
  agent,
  register,
  handleSubmit,
  setValue,
  setError,
  errors,
  getValues,
  onCloseModal = () => {},
}) => {
  const { process, toggleProcess } = useProcess();

  const dispatch = useDispatch();

  const handleChangeRaisonText = (value) => {
    // console.log(value);
    if (errors.raison) clearErrors("reason");
    setValue("reason", value);
  };

  const submitDemandeComptabity = async (values) => {
    try {
      if (!values.reason) return setError("reason");
      values.amount = parseFloat(values.amount).toString();

      let payload = { ...values, ...agent };
      const res = await postRequestAcuisition(payload);
      dispatch(addAccountingRequestByPage({ ...res.data, ...agent }));
      toastSuccess();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
      onCloseModal();
    }
  };

  return (
    <motion.div
      variants={formAnimate}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <FormContainer
        onSubmit={handleSubmit(submitDemandeComptabity)}
        className="form-theme-color"
      >
        <FormControl>
          <label htmlFor="numeroSerie">Objet de la demande</label>
          <input type="text" {...register("subject", { required: true })} />
          <ErrorSection>
            {errors.subject && (
              <small className="text-error">
                Veuillez renseignez L'objet de la demande
              </small>
            )}
          </ErrorSection>
        </FormControl>
        <FormControl>
          <label htmlFor="date">Date et heure</label>
          <input type="text" {...register("date")} readOnly />
          <ErrorSection></ErrorSection>
        </FormControl>

        <FormControl>
          <label htmlFor="date">Montant</label>
          <input type="text" {...register("amount", { required: true })} />
          <ErrorSection>
            {errors.montant && (
              <small className="text-error">
                Veuillez renseignez le montant
              </small>
            )}
          </ErrorSection>
        </FormControl>

        <FormControl>
          <label htmlFor="reason">Raison</label>
          <MarkdowTextEditor
            id="reason"
            className="theme-text-editor"
            getOutput={handleChangeRaisonText}
            style={{ marginBottom: 0 }}
            defaultValue={getValues("reason")}
          />
          <ErrorSection>
            {errors.raison && (
              <small className="text-error">
                Veuillez décrire la raison de votre demande
              </small>
            )}
          </ErrorSection>
        </FormControl>

        <ModalFooter>
          <ButtonWithLoader
            labelButton="Envoyer"
            isLoading={process}
            className="bg-btn-theme-color"
            type="submit"
          />
        </ModalFooter>
      </FormContainer>
    </motion.div>
  );
};
