import React from "react";
import { AgentCardBody, AgentCardContainer } from "./Trombinoscop.styled";
import PhotoAgent from "./Photo";
import { user_female, user_male } from "../../../../config/constantes";

const AgentCard = ({ agent }) => {
  let gender = "male";
  const noPhoto = gender == "male" ? user_male : user_female;

  return (
    <AgentCardContainer className="theme-card-trombinoscop">
      <PhotoAgent src={noPhoto} />
      <AgentCardBody>
        <p className="agent">26-James-Morrison</p>
        <p className="grade">Capitain</p>
        <p className="phone">555-1456987</p>
      </AgentCardBody>
    </AgentCardContainer>
  );
};

export default AgentCard;
