import React, { useMemo } from "react";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../components/Forms/FormView.styled";
import { GridRowHeader, PhotoAgent } from "../../Effectifs.styled";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import ButtonWithLoader from "../../../../../../components/Button/ButtonWithLoader";
import { user_male } from "../../../../../../config/constantes";
import { defaultFormValue, effectifFormResolver } from "./effectifResolver";
import { yupResolver } from "@hookform/resolvers/yup";
import useGradesListoption from "../../../../../../hooks/useGradesListoption";
import SelectAsync from "../../../../../../components/SelectAsync";
import { noPhoto } from "../../../../../../services/utils/user";

const FormEffectif = ({
  defaultValues = defaultFormValue,
  onSave,
  process = false,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    setError,
    clearErrors,
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(effectifFormResolver),
  });

  const submit = (values) => {
    onSave(values);
  };
  const photoStyle = {
    backgroundImage: `url(${noPhoto(getValues("gender"))})`,
  };

  const gradeData = useGradesListoption("sasp");

  const isOptionLoading = gradeData.status == "fullfilled" ? false : true;

  const gradesListOptions = useMemo(() => {
    if (gradeData.data.length == 0) return [];

    const lists = [...gradeData?.data].map((grade) => ({
      value: `api/grades/${grade.id}`,
      label: grade.name,
    }));

    const find = lists.find((grade) => grade.label == getValues("grade"));
    if (find) {
      setValue("grade", find.value);
      setValue("gradeLabel", find.label);
    }

    return lists;
  }, [gradeData.data]);

  const handleChangeGrade = (value) => {
    setValue("grade", value.value);
    setValue("gradeLabel", value.label);
  };
  return (
    <FormContainer onSubmit={handleSubmit(submit)} className="form-theme-color">
      <GridRowHeader>
        <div className="grid-a">
          <FormControl>
            <label htmlFor="firstname">Prénom</label>
            <input
              autoFocus
              type="text"
              {...register("firstname")}
              placeholder="Son Prénom"
            />
            <ErrorSection>
              <AnimatePresence>
                {errors.firstname && (
                  <motion.small className="text-error">
                    {errors.firstname.message}
                  </motion.small>
                )}
              </AnimatePresence>
            </ErrorSection>
          </FormControl>
          <FormControl>
            <label htmlFor="firstname">Nom</label>
            <input
              type="text"
              {...register("lastname")}
              placeholder="Son Nom"
            />
            <ErrorSection>
              <AnimatePresence>
                {errors.lastname && (
                  <motion.small className="text-error">
                    {errors.lastname.message}
                  </motion.small>
                )}
              </AnimatePresence>
            </ErrorSection>
          </FormControl>
          <FormControl>
            <label htmlFor="firstname">Matricule</label>
            <input
              type="text"
              {...register("matricule")}
              placeholder="Son Matricule"
            />
            <ErrorSection>
              <AnimatePresence>
                {errors.matricule && (
                  <motion.small className="text-error">
                    {errors.matricule.message}
                  </motion.small>
                )}
              </AnimatePresence>
            </ErrorSection>
          </FormControl>

          <FormControl>
            <label htmlFor="firstname">Grade</label>
            <SelectAsync
              options={gradesListOptions}
              isLoading={isOptionLoading}
              defaultValue={{ label: getValues("grade") }}
              onChange={handleChangeGrade}
            />
            <ErrorSection>
              <AnimatePresence>
                {errors.grade && (
                  <motion.small className="text-error">
                    {errors.grade.message}
                  </motion.small>
                )}
              </AnimatePresence>
            </ErrorSection>
          </FormControl>
        </div>
        <div className="grid-b">
          <PhotoAgent style={photoStyle} />
        </div>
      </GridRowHeader>

      <FormControl>
        <label htmlFor="firstname">IBAN</label>
        <input type="text" {...register("iban")} />
        <ErrorSection>
          <AnimatePresence>
            {errors.iban && (
              <motion.small className="text-error">
                {errors.iban.message}
              </motion.small>
            )}
          </AnimatePresence>
        </ErrorSection>
      </FormControl>

      <FormControl>
        <label htmlFor="firstname">Division</label>
        <input type="text" {...register("division")} />
        <ErrorSection>
          <AnimatePresence>
            {errors.division && (
              <motion.small className="text-error">
                {errors.division.message}
              </motion.small>
            )}
          </AnimatePresence>
        </ErrorSection>
      </FormControl>

      <ModalFooter>
        <ButtonWithLoader
          className="bg-btn-theme-color"
          type="submit"
          labelButton="Mettre à jour"
          isLoading={process}
        />
      </ModalFooter>
    </FormContainer>
  );
};

export default FormEffectif;
