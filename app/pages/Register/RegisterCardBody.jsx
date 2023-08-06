import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ConnexionBodyContent,
  InputConnextionWrapper,
} from "../Connexion/Connexion.styled";
import { AiOutlineUser } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { USER_DATA_STORAGE } from "../../config/constantes";
import useLocalStorage from "use-local-storage";
import { BsGenderAmbiguous, BsPhone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdOutlineLocalPolice } from "react-icons/md";
import {
  ErrorMessage,
  FormControl,
  SelectInputWrapper,
  SubmittButton,
} from "./Register.styled";
import {
  retrieveSubmitUseridentity,
  retrieveUserFaction,
  retrieveUseridentity,
} from "../Connexion/helper";
import {
  ErrorConnexionApparition,
  InputAnimation,
} from "../Connexion/Animation";
import { textForNullValue } from "../../services/utils/textUtils";
import Info from "./Info";
import SpinnerButton from "../../components/Shared/Loading/SpinnerButton";
import { api_register } from "./helper";

const RegisterCardBody = () => {
  const { faction } = useParams();

  const { firstname, name } = retrieveUseridentity();
  const [isProcess, setIsProcess] = useState(false);

  const submitButtonRef = useRef(null);
  const navigate = useNavigate();

  const registration = useCallback(async (dataToSend) => {
    const res = await api_register(dataToSend);

    if (res) {
      const { firstname, name, idAgent, gender, faction, phone } =
        await res.json();

      usercredential = {
        ...usercredential,
        firstname,
        name,
        idAgent,
        gender,
        faction,
        phone,
      };
      localStorage.removeItem(USER_DATA_STORAGE);
      navigate("/", { replace: true });
    }
  }, []);

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

  const onSubmit = async (data) => {
    if (data) {
      if (submitButtonRef.current) {
        submitButtonRef.current.textContent = "Enregistrement en cours...";
      }

      setIsProcess((current) => !current);
      const { idDiscord } = usercredential;

      let cleanAgent = retrieveSubmitUseridentity(data.agentIdentity);
      let faction = data.faction.toLowerCase();
      let phone = data.phone ? data.phone : textForNullValue(data.phone, "N/A");
      let gender = data.gender;

      let dataToSend = { idDiscord, ...cleanAgent, faction, phone, gender };

      try {
        registration(dataToSend);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const agentInputRef = useRef(null);
  const factionInputRef = useRef(null);

  /*   useLayoutEffect(() => {
    console.log(usercredential);
  }, []); */

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
          </FormControl>
        </motion.div>
        <motion.div variants={InputAnimation} custom={1}>
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
                //defaultValue={"555-"}
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
        </motion.div>
        <motion.div variants={InputAnimation} custom={1}>
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
            <ErrorMessage>
              <AnimatePresence></AnimatePresence>
            </ErrorMessage>
          </FormControl>
        </motion.div>
        <motion.div variants={InputAnimation} custom={1}>
          <SubmittButton ref={submitButtonRef}>
            Enregistrer {isProcess ? <SpinnerButton /> : null}
          </SubmittButton>
        </motion.div>
      </form>
    </ConnexionBodyContent>
  );
};

export default RegisterCardBody;
