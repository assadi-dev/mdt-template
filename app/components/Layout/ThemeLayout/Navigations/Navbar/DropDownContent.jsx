import React from "react";
import { DropdownContentWrapper } from "./Navbar.styled";
import { motion } from "framer-motion";
import { dropdownAnimation } from "./Animation";
import DropDownUserList from "./DropDownUserList";

const DropDownContent = () => {
  return (
    <motion.div
      className="dropdown-absolute"
      variants={dropdownAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <DropdownContentWrapper className="dropdown-menu">
        <DropDownUserList />
      </DropdownContentWrapper>
    </motion.div>
  );
};

export default DropDownContent;
