import React from "react";
import { defaultFormValue } from "../ListOfEffectifsView";
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

const FormEffectif = ({
  defaultValues = defaultFormValue,
  onSave,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm({
    defaultValues,
  });

  const submit = (values) => {
    console.log(values);
  };

  const photoStyle = { backgroundImage: `url(${user_male})` };

  return (
    <FormContainer onSubmit={handleSubmit(submit)} className="form-theme-color">
      <GridRowHeader>
        <div className="grid-a">
          <FormControl>
            <label htmlFor="firstname">Prénom</label>
            <input
              autoFocus
              type="text"
              {...register("firstname", { required: true })}
              placeholder="Son Prénom"
            />
            <ErrorSection>
              <AnimatePresence>
                {errors.firstname && (
                  <motion.small className="text-error">
                    Veuillez entrer le prénom
                  </motion.small>
                )}
              </AnimatePresence>
            </ErrorSection>
          </FormControl>
          <FormControl>
            <label htmlFor="firstname">Nom</label>
            <input
              type="text"
              {...register("lastname", { required: true })}
              placeholder="Son Nom"
            />
            <ErrorSection>
              <AnimatePresence>
                {errors.lastname && (
                  <motion.small className="text-error">
                    Veuillez entrer le prénom
                  </motion.small>
                )}
              </AnimatePresence>
            </ErrorSection>
          </FormControl>
          <FormControl>
            <label htmlFor="firstname">Matricule</label>
            <input
              type="text"
              {...register("matricule", { required: true })}
              placeholder="Son Matricule"
            />
            <ErrorSection>
              <AnimatePresence>
                {errors.matricule && (
                  <motion.small className="text-error">
                    Veuillez entrer le prénom
                  </motion.small>
                )}
              </AnimatePresence>
            </ErrorSection>
          </FormControl>

          <FormControl>
            <label htmlFor="firstname">Grade</label>
            <input type="text" {...register("grade", { required: true })} />
            <ErrorSection>
              <AnimatePresence>
                {errors.grade && (
                  <motion.small className="text-error">
                    Veuillez entrer le grade
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
        <input type="text" {...register("iban", { required: true })} />
        <ErrorSection>
          <AnimatePresence>
            {errors.iban && (
              <motion.small className="text-error">
                Veuillez entrer l'IBAN
              </motion.small>
            )}
          </AnimatePresence>
        </ErrorSection>
      </FormControl>

      <FormControl>
        <label htmlFor="firstname">Division</label>
        <input type="text" {...register("division", { required: true })} />
        <ErrorSection>
          <AnimatePresence>
            {errors.division && (
              <motion.small className="text-error">
                Veuillez entrer la division
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
        />
      </ModalFooter>
    </FormContainer>
  );
};

export default FormEffectif;
