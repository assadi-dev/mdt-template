import React from "react";
import { NavbarWrapper } from "./Navbar.styled";
import { useSelector } from "react-redux";
import UserDropDown from "./UserDropDown";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <UserDropDown />
    </NavbarWrapper>
  );
};

export default Navbar;
