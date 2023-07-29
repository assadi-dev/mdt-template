import React from "react";
import { DropdownContentWrapper } from "./Navbar.styled";
import { motion } from "framer-motion";
import { dropdownAnimation } from "./Animation";

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
        DropDownContent
      </DropdownContentWrapper>
    </motion.div>
  );
};

export default DropDownContent;
