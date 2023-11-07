import React from "react";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  HeaderModal,
  ModalFooter,
  ModalFormContainer,
  SubmitButton,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import { useForm } from "react-hook-form";
import { ContentContainer } from "../../Saisie.styled";
import { AnimatePresence, motion } from "framer-motion";
import { postesListes } from "../../../../../../config/options";
import SpinnerButton from "../../../../../../components/Shared/Loading/SpinnerButton";
import useProcess from "../../../../../../hooks/useProcess";
import MarkdowTextEditor from "../../../../../../components/TextEditor/MarkdowTextEditor";

const FormAcquisition = ({ submitForm, defaultValue }) => {
  const { process, toggleProcess } = useProcess();

  const defaultValues = {
    dateOfAcquisition: defaultValue?.dateOfAcquisition,
    post: defaultValue?.post,
    acquisitionDescription: defaultValue?.acquisitionDescription,
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleGetDescription = (value) => {
    setValue("acquisitionDescription", value);
  };

  return (
    <FormContainer
      className="form-theme-color"
      onSubmit={handleSubmit(submitForm)}
    >
      {/*           <FormControl>
            <label htmlFor="agent">Agent</label>
            <input
              type="text"
              {...register("agent", { required: true })}
              placeholder="n°matricule, prénom et nom de l'agent. EX 102-john Doe"
            />
            <ErrorSection>
              <AnimatePresence>
                {errors.agent && (
                  <motion.small className="text-error">
                    Veuillez définir l'identité' de l'agent
                  </motion.small>
                )}
              </AnimatePresence>
            </ErrorSection>
          </FormControl> */}

      <FormControl>
        <label htmlFor="dateOfAcquisition">Date et heure</label>
        <input
          type="text"
          {...register("dateOfAcquisition", { required: true })}
          placeholder="Date et heure du depot"
        />
        <ErrorSection>
          <AnimatePresence>
            {errors.date && (
              <motion.small className="text-error">
                Veuillez definir la date du dépot
              </motion.small>
            )}
          </AnimatePresence>
        </ErrorSection>
      </FormControl>

      <FormControl>
        <label htmlFor="post">Poste</label>
        <select {...register("post", { required: true })}>
          {postesListes.map((poste) => (
            <option key={poste} value={poste}>
              {poste}
            </option>
          ))}
        </select>
      </FormControl>
      <FormControl>
        <label htmlFor="acquisitionDescription">Objets saisie</label>
        <MarkdowTextEditor
          id="acquisitionDescription"
          className="theme-text-editor"
          getOutput={handleGetDescription}
          defaultValue={defaultValue?.acquisitionDescription}
        />
      </FormControl>

      <ModalFooter>
        <SubmitButton className="bg-btn-theme-color" type="submit">
          Ajouter
          {process && <SpinnerButton className="loading-process" />}
        </SubmitButton>
      </ModalFooter>
    </FormContainer>
  );
};

export default FormAcquisition;
