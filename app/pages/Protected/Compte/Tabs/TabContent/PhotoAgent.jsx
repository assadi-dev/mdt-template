import React from "react";
import { noPhoto } from "../../../../../services/utils/user";

const PhotoAgent = ({ photo, alt, gender = "male" }) => {
  const style = photo
    ? { backgroundImage: `url(${photo})` }
    : { backgroundImage: `url(${noPhoto(gender)})` };

  return <div className="photo" style={style}></div>;
};

export default PhotoAgent;
