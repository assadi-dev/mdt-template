import React from "react";
import { Userphoto } from "./Navbar.styled";
import { user_female, user_male } from "../../../../../config/constantes";

const PhotoProfile = ({ photo, gender }) => {
  const noPhoto = gender == "male" ? user_male : user_female;
  const style = photo
    ? { backgroundImage: `url(${photo})` }
    : { backgroundImage: `url(${noPhoto})` };

  return <Userphoto style={style} />;
};

export default PhotoProfile;
