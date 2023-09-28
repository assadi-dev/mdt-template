import React, { useEffect, useRef, useState } from "react";
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
  const { photo, gender, lastname, firstname, grade, matricule, faction } =
    authenticateUser;

  const fullGrade = `${matricule ? matricule : "N/A"}-${grade ? grade : "N/A"}`;
  const lightGrade = `${grade ? grade : "N/A"}`;
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleOpenDropdown = (e) => {
    e.stopPropagation();
    setOpenDropdown((current) => (current = !current));
  };

  const userMenuRef = useRef(null);

  useEffect(() => {
    if (!userMenuRef.current) return;
    const closeMenu = () => {
      let dropMenu = userMenuRef.current.querySelector(".dropdown-menu");
      if (!dropMenu) return;
      if (document.contains(dropMenu)) {
        setOpenDropdown((current) => (current = false));
      }
    };
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [userMenuRef.current]);

  return (
    <>
      <UserProfileContainer ref={userMenuRef} onClick={toggleOpenDropdown}>
        <PhotoProfile photo={photo} gender={gender} />
        <div>
          <UsernameTextRow>
            <UsernameStyle className="agent-name">
              {firstname} {lastname}
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

          <GradeNameStyle className="agent-grade">
            {faction ? (faction != "bcso" ? fullGrade : lightGrade) : null}
          </GradeNameStyle>
        </div>
        <AnimatePresence>
          {openDropdown ? <DropDownContent /> : null}
        </AnimatePresence>
      </UserProfileContainer>
    </>
  );
};

export default UserDropDown;
