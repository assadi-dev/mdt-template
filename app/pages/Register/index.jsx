import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { ConnexionCardAnimation } from "../Connexion/Animation";
import ConnexionHeaderTitle from "../Connexion/ConnexionHeaderTitle";
import ConnexionCardBody from "../Connexion/ConnexionCardBody";
import {
  ConnexionCard,
  ConnexionPageWrapper,
} from "../Connexion/Connexion.styled";
import RegisterHeaderTitle from "./RegisterHeaderTitle";
import RegisterCardBody from "./RegisterCardBody";

const Register = () => {
  const { faction } = useParams();

  return (
    <ConnexionPageWrapper className={faction}>
      <motion.div
        variants={ConnexionCardAnimation}
        initial="hidden"
        animate="show"
      >
        <ConnexionCard>
          <RegisterHeaderTitle />

          <RegisterCardBody />
        </ConnexionCard>
      </motion.div>
    </ConnexionPageWrapper>
  );
};

export default Register;
