import React from "react";
import { AgentCardBody, AgentCardContainer } from "./Trombinoscop.styled";
import PhotoAgent from "./Photo";

const AgentCard = () => {
  return (
    <AgentCardContainer>
      <PhotoAgent
        src={
          "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
        }
      />
      <AgentCardBody>
        <p className="agent">26-James-Morrison</p>
        <p className="grade">Capitain</p>
        <p className="phone">555-1456987</p>
      </AgentCardBody>
    </AgentCardContainer>
  );
};

export default AgentCard;
