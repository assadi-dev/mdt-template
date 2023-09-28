import React from "react";
import { Userphoto } from "./Navbar.styled";
import { user_female, user_male } from "../../../../../config/constantes";
import { noPhoto } from "../../../../../services/utils/user";

const PhotoProfile = ({ photo, gender }) => {
  const style = photo
    ? { backgroundImage: `url(${photo})` }
    : { backgroundImage: `url(${noPhoto(gender)})` };

  return <Userphoto style={style} />;
};

export default PhotoProfile;
