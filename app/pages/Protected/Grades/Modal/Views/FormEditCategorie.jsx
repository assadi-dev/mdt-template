import React, { useEffect, useState } from "react";
import {
  ErrorSection,
  FormContainer,
  HeaderModal,
  ModalContainer,
  ModalFooter,
  SubmitButton,
} from "./FormView.styled";
import CloseModalBtn from "../../../../../components/Modal/CloseModalBtn";
import { AnimatePresence, motion } from "framer-motion";
import SpinnerButton from "../../../../../components/Shared/Loading/SpinnerButton";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchOneGradeCategory, putGradeCategories } from "../../helper";
import { editGradeCategory } from "../../../../../features/GradeCategories/GradeCategories.slice";
import { listsFactions } from "../../../../../config/factions";
import { toastError, toastSuccess } from "../../../../../services/utils/alert";

const FormEditGradeCategorie = ({ data, onCloseModal, ...props }) => {
  const [process, setProcess] = useState(false);
  const toggleprocess = () => {
    setProcess((current) => (current = !current));
  };

  const defaultValues = { name: "", faction: "" };

  const iniDefaultValues = async (signal) => {
    try {
      const res = await fetchOneGradeCategory(data.id, signal);
      setValue("name", res.data.name);
      setValue("faction", res.data.faction);
    } catch (error) {
      console.log(error.message);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.id) return;
    const controller = new AbortController();
    const signal = controller.signal;

    iniDefaultValues(signal);

    return () => {
      controller.abort();
    };
  }, [data.id]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const submitValues = async (values) => {
    toggleprocess();

    try {
      let toDispatch = { id: data.id, ...values };
      dispatch(editGradeCategory(toDispatch));
      await putGradeCategories(data.id, values);
      onCloseModal();
      toastSuccess()
    } catch (error) {
      console.log(error.message);
      toastError()
    }
    toggleprocess();
  };

  return (
    <ModalContainer {...props}>
      <HeaderModal>
        <h2 className="form-title"> Modifier </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormContainer
        className="form-theme-color"
        onSubmit={handleSubmit(submitValues)}
      >
        <div className="form-control">
          <label htmlFor="name">Nom</label>

          <input
            autoFocus
            type="text"
            {...register("name", { required: true })}
            placeholder="EX: EFFECTIF,SUPERVISOR,COMMAND STAFF..."
          />
          <ErrorSection>
            <AnimatePresence>
              {errors.name && (
                <motion.small className="text-error">
                  Veuillez entrer le nom
                </motion.small>
              )}
            </AnimatePresence>
          </ErrorSection>
        </div>
        <div className="form-control">
          <label htmlFor="faction">Faction</label>

          <select type="text" {...register("faction", { required: true })}>
            {listsFactions.map((faction) => (
              <option value={faction.short_name}>
                {faction.short_name.toUpperCase()}
              </option>
            ))}
          </select>
          <ErrorSection>
            <AnimatePresence>
              {errors.faction && (
                <motion.small className="text-error">
                  Veuillez définir sa faction
                </motion.small>
              )}
            </AnimatePresence>
          </ErrorSection>
        </div>
        <ModalFooter>
          <SubmitButton className="bg-btn-theme-color" type="submit">
            Enregistrer
            {process && <SpinnerButton />}
          </SubmitButton>
        </ModalFooter>
      </FormContainer>
    </ModalContainer>
  );
};

export default FormEditGradeCategorie;
