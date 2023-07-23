import React, { useEffect, useLayoutEffect, useRef } from "react";
import {
  ConnexionBodyContent,
  InputConnextionWrapper,
} from "../Connexion/Connexion.styled";
import { AiOutlineUser } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { redirect, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorConnexionApparition } from "./Animation";
import { USER_DATA_STORAGE } from "../../config/constantes";
import useLocalStorage from "use-local-storage";
import { BsGenderAmbiguous, BsPhone } from "react-icons/bs";
import { MdOutlineLocalPolice } from "react-icons/md";
import {
  ErrorMessage,
  FormControl,
  SelectInputWrapper,
  SubmittButton,
} from "./Register.styled";
import { retrieveUserFaction, retrieveUseridentity } from "../Connexion/helper";

const RegisterCardBody = () => {
  const { faction } = useParams();

  const { firstname, name } = retrieveUseridentity();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      agentIdentity: `${firstname} ${name}`,
      faction: faction.toLocaleUpperCase(),
    },
  });

  const onSubmit = (data) => {
    if (data) {
      const { agentIdentity } = data;
      console.log(data);

      // return location.replace("/connect/discord");
    }
  };

  const agentInputRef = useRef(null);
  const factionInputRef = useRef(null);

  useLayoutEffect(() => {
    if (!agentInputRef.current && !factionInputRef.current) return;
  }, [agentInputRef.current, factionInputRef.current]);

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

        <FormControl>
          <SelectInputWrapper>
            <span>
              <BsGenderAmbiguous />
            </span>
            <select
              name="gender"
              id="gender"
              defaultValue={"male"}
              {...register("gender", { required: true })}
            >
              <option value="male">Homme</option>
              <option value="female">Femme</option>
            </select>
          </SelectInputWrapper>
        </FormControl>
        <ErrorMessage>
          <AnimatePresence>
            {errors.gender && (
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

        <FormControl>
          <InputConnextionWrapper>
            <span>
              {" "}
              <BsPhone />
            </span>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Téléphone"
              {...register("phone", { required: true })}
            />
          </InputConnextionWrapper>
          <ErrorMessage>
            <AnimatePresence>
              {errors.phone && (
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

        <FormControl>
          <InputConnextionWrapper>
            <span>
              {" "}
              <MdOutlineLocalPolice />
            </span>
            <input
              type="text"
              name="faction"
              id="faction"
              placeholder="Faction"
              {...register("faction")}
              readOnly
            />
          </InputConnextionWrapper>
        </FormControl>
        <ErrorMessage>
          <AnimatePresence></AnimatePresence>
        </ErrorMessage>

        <SubmittButton>Enregistrer</SubmittButton>
      </form>
    </ConnexionBodyContent>
  );
};

export default RegisterCardBody;
