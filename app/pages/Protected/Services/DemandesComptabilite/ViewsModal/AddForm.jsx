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
import ErrorInputSection from "../../../../../components/Forms/ErrorInputSection";
import { FormValueResolver } from "./DemandeComptaResolver";
import { datetimeFormatISO8601 } from "../../../../../services/utils/dateFormat";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const AddForm = ({
  agent,

  onCloseModal = () => {},
}) => {
  const { process, toggleProcess } = useProcess();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      agent: `api/agents/${agent.idAgent}`,
      subject: "",
      date: datetimeFormatISO8601(new Date()),
      reason: "",
      amount: "00.00",
    },
    resolver: yupResolver(FormValueResolver),
  });

  const handleChangeRaisonText = (value) => {
    // console.log(value);
    if (errors.reason) clearErrors("reason");
    setValue("reason", value);
  };

  const submitDemandeComptabity = async (values) => {
    try {
      toggleProcess();
      if (!values.reason) return setError("reason");
      values.amount = parseFloat(values.amount).toString();

      let payload = { ...values, ...agent };
      const res = await postRequestAcuisition(payload);
      dispatch(addAccountingRequestByPage({ ...res.data, ...agent }));
      onCloseModal();
      toastSuccess();
    } catch (error) {
      console.log(error);
      toastError();
    } finally {
      toggleProcess();
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
          <input type="text" {...register("subject")} />
          <ErrorInputSection errors={errors.subject} />
        </FormControl>
        <FormControl>
          <label htmlFor="date">Date et heure</label>
          <input type="text" {...register("date")} readOnly />
          <ErrorSection></ErrorSection>
        </FormControl>

        <FormControl>
          <label htmlFor="date">Montant</label>
          <input type="text" {...register("amount")} />
          <ErrorInputSection errors={errors.amount} />
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
          <ErrorInputSection errors={errors.reason} />
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
