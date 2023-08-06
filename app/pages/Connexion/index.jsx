import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { ConnexionCard, ConnexionPageWrapper } from "./Connexion.styled";
import { motion } from "framer-motion";
import { ConnexionCardAnimation } from "./Animation";
import ConnexionCardBody from "./ConnexionCardBody";
import ConnexionHeaderTitle from "./ConnexionHeaderTitle";

const Connexion = () => {
  const { faction } = useParams();

  return (
    <ConnexionPageWrapper className={faction}>
      <motion.div
        variants={ConnexionCardAnimation}
        initial="hidden"
        animate="show"
      >
        <ConnexionCard>
          <ConnexionHeaderTitle />

          <ConnexionCardBody />
        </ConnexionCard>
      </motion.div>
    </ConnexionPageWrapper>
  );
};

export default Connexion;
