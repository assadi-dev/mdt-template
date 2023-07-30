import React, { useRef, useState } from "react";
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
import { ErrorConnexionApparition, InputAnimation } from "./Animation";
import { USER_DATA_STORAGE } from "../../config/constantes";
import useLocalStorage from "use-local-storage";
import SpinnerButton from "../../components/Shared/Loading/SpinnerButton";
import { FiUser } from "react-icons/fi";

const ConnexionCardBody = () => {
  const { faction } = useParams();

  const [isProcess, setIsProcess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [identity, setIdentiy] = useLocalStorage(USER_DATA_STORAGE, undefined);
  const connectButtonRef = useRef(null);

  const onSubmit = (data) => {
    if (data) {
      if (connectButtonRef.current) {
        connectButtonRef.current.textContent = "Redirection...";
      }
      setIsProcess((current) => !current);
      const { agentIdentity } = data;

      setIdentiy({ agentIdentity, faction });

      return location.replace("/connect/discord");
    }
  };

  return (
    <ConnexionBodyContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <motion.div variants={InputAnimation} custom={1}>
          <FormControl>
            <InputConnextionWrapper>
              <span>
                {" "}
                <FiUser />
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
        </motion.div>
        <motion.div variants={InputAnimation} custom={1}>
          <DiscordButton type="submit" ref={connectButtonRef}>
            <span>
              <FaDiscord />
            </span>
            Connexion {isProcess ? <SpinnerButton /> : null}
          </DiscordButton>
        </motion.div>
      </form>
    </ConnexionBodyContent>
  );
};

export default ConnexionCardBody;
