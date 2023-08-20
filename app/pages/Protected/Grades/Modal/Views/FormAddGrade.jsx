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
      name: firsLetterCapitalise(values.name),
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
        };
        dispatch(addGrade(dataToDispatch));
        setProcess((current) => (current = false));
        onCloseModal();
      }
    } catch (error) {
      console.log(error.message);
    }
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
            <option value="lspd">LSPD</option>
            <option value="bcso"> BCSO</option>
            <option value="doj">DOJ</option>
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
          <SubmitButton className="bg-btn-alt-theme-color" type="submit">
            Enregistrer
            {process && <SpinnerButton />}
          </SubmitButton>
        </ModalFooter>
      </FormContainer>
    </ModalContainer>
  );
};

export default FormAddCategory;
