import React from "react";
import {
  IconContainer,
  PanicAlertContainer,
  UsercAtivate,
} from "./PanicButton.styled";
import { SirenIcon } from "../../../../../Svg/Navbar";

const UserAlertCard = ({ agent = "" }) => {
  return (
    <PanicAlertContainer>
      <IconContainer className="justify-self-start align-seft-center ">
        {" "}
        <SirenIcon className="siren-animation" />{" "}
      </IconContainer>
      <UsercAtivate> {agent} </UsercAtivate>
      <IconContainer className="justify-self-end align-seft-center ">
        {" "}
        <SirenIcon className="siren-animation" />
      </IconContainer>
    </PanicAlertContainer>
  );
};

export default UserAlertCard;
