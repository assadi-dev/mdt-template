import React, { useState } from "react";
import { EndWrapper, NavbarWrapper } from "./Navbar.styled";
import { useSelector } from "react-redux";
import UserDropDown from "./UserDropDown";
import PanicButton from "./PannicButton";
import UserAlertCard from "./PannicButton/UserAlertCard";

const Navbar = () => {
  const [isPanicActivate, setPanicActivate] = useState(false);
  const togglePanicActivate = () => {
    setPanicActivate((current) => (current = !current));
  };

  const authenticateUser = useSelector((state) => state.AuthenticateReducer);
  const { idAgent, lastname, firstname, matricule } = authenticateUser;

  const agent = `${matricule ? matricule : "N/A"}-${firstname} ${lastname}`;

  return (
    <NavbarWrapper className="navbar ">
      {isPanicActivate && <UserAlertCard agent={agent} />}
      <EndWrapper className="d-flex justify-self-end align-center ">
        <PanicButton
          isPanicActivate={isPanicActivate}
          setPanicActivate={togglePanicActivate}
          idAgent={idAgent}
        />
        <UserDropDown />
      </EndWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
