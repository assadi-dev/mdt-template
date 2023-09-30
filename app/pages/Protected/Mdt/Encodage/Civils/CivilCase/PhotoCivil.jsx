import React from "react";
import { noPhoto } from "../../../../../../services/utils/user";

const PhotoCivil = ({ photo, gender, alt, ...props }) => {
  const style = photo
    ? { backgroundImage: `url(${photo})` }
    : { backgroundImage: `url(${noPhoto(gender)})` };

  return <div className="photo" style={style}></div>;
};
export default PhotoCivil;
