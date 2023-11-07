import React from "react";
import { AgentCardBody, AgentCardContainer } from "./Trombinoscop.styled";
import PhotoAgent from "./Photo";
import { user_female, user_male } from "../../../../config/constantes";
import {
  cleanAgentNoMatricule,
  noPhoto,
} from "../../../../services/utils/user";

const AgentCard = ({ agent }) => {
  let gender = agent?.gender;
  const photo = noPhoto(gender);
  const idAgent = agent?.idAgent;
  const firstname = cleanAgentNoMatricule(
    agent?.matricule,
    agent?.firstname,
    agent?.lastname
  );

  return (
    <AgentCardContainer className="theme-card-trombinoscop">
      <PhotoAgent src={photo} />
      <AgentCardBody>
        <p className="agent">{firstname}</p>
        <p className="grade">{agent?.grade}</p>
        <p className="phone">{agent?.phone}</p>
      </AgentCardBody>
    </AgentCardContainer>
  );
};

export default AgentCard;
