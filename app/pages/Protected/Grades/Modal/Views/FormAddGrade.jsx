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
import InputGradesCategories from "./InputGradesCategories";
import { useDispatch } from "react-redux";
import { addGradeCategory } from "../../../../../features/GradeCategories/GradeCategories.slice";
import { postGrades } from "../../helper";
import { addGrade } from "../../../../../features/Grades/Grades.slice";
import { listsFactions } from "../../../../../config/factions";
import { toastError, toastSuccess } from "../../../../../services/utils/alert";

const FormAddCategory = ({ onCloseModal, ...props }) => {
  const [process, setProcess] = useState(false);
  const toggleprocess = () => {
    setProcess((current) => (current = !current));
  };

  const dispatch = useDispatch();

  const defaultValues = {
    name: "",
    faction: "",
    category: "",
    gradeCategory: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ defaultValues });

  const submitValues = async (values) => {
    toggleprocess();

    const dataToSend = {
      name: firsLetterCapitalise(values.name).trim(),
      gradeCategory: values.gradeCategory,
    };

    const res = await postGrades(dataToSend);

    try {
      if (res) {
        let { id, name } = await res.data;
        let dataToDispatch = {
          id,
          name,
          faction: values.faction,
          nb_agents: 0,
          category: values.category,
        };
        dispatch(addGrade(dataToDispatch));
        setProcess((current) => (current = false));
        onCloseModal();
        toastSuccess();
      }
    } catch (error) {
      console.log(error.message);
      toastError();
    }
    toggleprocess();
  };

  return (
    <ModalContainer {...props}>
      <HeaderModal>
        <h2 className="form-title"> Ajouter un grade </h2>
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
            placeholder="EX: OFFICIER I,SENIOR LEAD OFFICER,LIEUTENANT..."
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
              <option key={faction.id} value={faction.short_name}>
                {faction.short_name.toUpperCase()}
              </option>
            ))}
          </select>
          <ErrorSection>
            <AnimatePresence>
              {errors.faction && (
                <motion.small className="text-error">
                  Veuillez selectionner une faction
                </motion.small>
              )}
            </AnimatePresence>
          </ErrorSection>
        </div>

        <div className="form-control">
          {watch("faction") && (
            <InputGradesCategories
              register={register}
              faction={getValues("faction")}
              errors={errors}
              setValue={setValue}
            />
          )}
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

export default FormAddCategory;
