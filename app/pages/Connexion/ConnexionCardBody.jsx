import React from "react";
import {
  ConnexionBodyContent,
  DiscordButton,
  ErrorMessage,
  FormControl,
  InputConnextionWrapper,
} from "./Connexion.styled";
import { AiOutlineUser } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { redirect, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorConnexionApparition } from "./Animation";
import { USER_DATA_STORAGE } from "../../config/constantes";
import useLocalStorage from "use-local-storage";

const ConnexionCardBody = () => {
  const { faction } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [identity, setIdentiy] = useLocalStorage(USER_DATA_STORAGE, undefined);

  const onSubmit = (data) => {
    if (data) {
      const { agentIdentity } = data;

      setIdentiy({ agentIdentity, faction });

      return location.replace("/connect/discord");
    }
  };

  return (
    <ConnexionBodyContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <InputConnextionWrapper>
            <span>
              {" "}
              <AiOutlineUser />
            </span>
            <input
              type="text"
              name="agentIdentity"
              id="agentIdentity"
              placeholder="Prénom et Nom"
              {...register("agentIdentity", { required: true })}
            />
          </InputConnextionWrapper>
          <ErrorMessage>
            <AnimatePresence>
              {errors.agentIdentity && (
                <motion.p
                  variants={ErrorConnexionApparition}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  Ce champs est obligatoire
                </motion.p>
              )}
            </AnimatePresence>
          </ErrorMessage>
        </FormControl>

        <DiscordButton type="submit">
          <span>
            <FaDiscord />
          </span>
          Connexion
        </DiscordButton>
      </form>
    </ConnexionBodyContent>
  );
};

export default ConnexionCardBody;
