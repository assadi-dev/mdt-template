import React from "react";
import {
  GradeNameStyle,
  UserProfileContainer,
  UsernameStyle,
} from "./Navbar.styled";
import PhotoProfile from "./PhotoProfile";
import { useSelector } from "react-redux";

const UserDropDown = () => {
  const authenticateUser = useSelector((state) => state.AuthenticateReducer);
  const { photo, gender, name, firstname, grade, matricule } = authenticateUser;

  const fullGrade = `${matricule ? matricule : "N/A"}-${grade ? grade : "N/A"}`;

  return (
    <>
      <UserProfileContainer>
        <PhotoProfile photo={photo} gender={gender} />
        <div>
          <UsernameStyle>
            {firstname} {name}
          </UsernameStyle>
          <GradeNameStyle>{fullGrade}</GradeNameStyle>
        </div>
      </UserProfileContainer>
    </>
  );
};

export default UserDropDown;
