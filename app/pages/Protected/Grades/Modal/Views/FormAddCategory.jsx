import React, { useState } from "react";
import {
  ErrorSection,
  FormContainer,
  HeaderModal,
  ModalContainer,
  ModalFooter,
  SubmitButton,
} from "./FormView.styled";
import CloseModalBtn from "../../../../../components/Modal/CloseModalBtn";
import SpinnerButton from "../../../../../components/Shared/Loading/SpinnerButton";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { firsLetterCapitalise } from "../../../../../services/utils/textUtils";
import { useDispatch } from "react-redux";
import { addGradeCategory } from "../../../../../features/GradeCategories/GradeCategories.slice";
import { postGradeCategories } from "../../helper";

const FormAddGrade = ({ onCloseModal, ...props }) => {
  const [process, setProcess] = useState(false);
  const toggleprocess = () => {
    setProcess((current) => (current = !current));
  };

  const dispatch = useDispatch();

  const defaultValues = {
    name: "",
    faction: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const submitValues = async (values) => {
    toggleprocess();

    try {
      const dataToSend = {
        name: firsLetterCapitalise(values.name),
        faction: values.faction,
      };

      const res = await postGradeCategories(dataToSend);
      const { id, name } = await res.data;
      const dataToDispatch = {
        id,
        name,
        faction: values.faction,
        nb_grades: 0,
      };
      dispatch(addGradeCategory(dataToDispatch));
      onCloseModal();
    } catch (error) {
      console.log(error.message);
    }
    toggleprocess();
  };

  return (
    <ModalContainer {...props}>
      <HeaderModal>
        <h2 className="form-title"> Ajouter une catégorie </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormContainer
        className="form-theme-color"
        onSubmit={handleSubmit(submitValues)}
      >
        <div className="form-control">
          <label htmlFor="name">Nom</label>

          <input
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
            <option value="lspd">LSPD</option>
            <option value="bcso"> BCSO</option>
            <option value="doj">DOJ</option>
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

export default FormAddGrade;
