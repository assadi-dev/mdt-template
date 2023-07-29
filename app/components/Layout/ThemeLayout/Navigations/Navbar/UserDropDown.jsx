import React, { useState } from "react";
import {
  GradeNameStyle,
  UserDropDownBtn,
  UserProfileContainer,
  UsernameStyle,
  UsernameTextRow,
} from "./Navbar.styled";
import PhotoProfile from "./PhotoProfile";
import { useSelector } from "react-redux";
import { FiChevronDown } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { chevronAnimation } from "./Animation";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import { TfiAngleDown, TfiAngleLeft } from "react-icons/tfi";
import DropDownContent from "./DropDownContent";

const UserDropDown = () => {
  const authenticateUser = useSelector((state) => state.AuthenticateReducer);
  const { photo, gender, name, firstname, grade, matricule } = authenticateUser;

  const fullGrade = `${matricule ? matricule : "N/A"}-${grade ? grade : "N/A"}`;
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleOpenDropdown = () => {
    setOpenDropdown((current) => (current = !current));
  };

  return (
    <>
      <UserProfileContainer onClickCapture={toggleOpenDropdown}>
        <PhotoProfile photo={photo} gender={gender} />
        <div>
          <UsernameTextRow>
            <UsernameStyle>
              {firstname} {name}
            </UsernameStyle>

            <motion.span
              className="dropdown-user-chevron"
              variants={chevronAnimation}
              animate="show"
              initial="hidden"
              custom={openDropdown}
            >
              <TfiAngleLeft />
            </motion.span>
          </UsernameTextRow>

          <GradeNameStyle>{fullGrade}</GradeNameStyle>
        </div>
        <AnimatePresence>
          {openDropdown ? <DropDownContent /> : null}
        </AnimatePresence>
      </UserProfileContainer>
    </>
  );
};

export default UserDropDown;
