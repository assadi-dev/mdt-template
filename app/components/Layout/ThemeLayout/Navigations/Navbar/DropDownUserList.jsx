import React from "react";
import { FiPower, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserDropDownListContentWrapper } from "./Navbar.styled";

const DropDownUserList = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    location.replace("/logout");
  };
  const goUserAccount = () => {
    navigate("/mon-compte/info-personel");
  };

  return (
    <UserDropDownListContentWrapper>
      <motion.li onClick={goUserAccount}>
        <span>
          <FiUser />
        </span>
        Mon compte
      </motion.li>
      <motion.li onClick={onLogout}>
        <span>
          <FiPower />
        </span>
        Déconnexion
      </motion.li>
    </UserDropDownListContentWrapper>
  );
};

export default DropDownUserList;
