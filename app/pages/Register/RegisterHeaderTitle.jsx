import React from "react";
import { useParams } from "react-router-dom";
import { factionsCollections } from "../../config/factions";
import {
  ConnecionCardHeaderTitle,
  ConnecionCardHeaderWrapper,
  EmblemMini,
} from "../Connexion/Connexion.styled";

const RegisterHeaderTitle = () => {
  const { faction } = useParams();

  if (!faction) return null;

  const title = factionsCollections[faction].full_name;
  const emblem = factionsCollections[faction].emblem;

  return (
    <ConnecionCardHeaderWrapper>
      <EmblemMini img={emblem} />
      <ConnecionCardHeaderTitle>Enregistrement</ConnecionCardHeaderTitle>
      <EmblemMini img={emblem} />
    </ConnecionCardHeaderWrapper>
  );
};

export default RegisterHeaderTitle;
