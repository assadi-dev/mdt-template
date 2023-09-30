import React from "react";
import {
  CivilCardContainer,
  CivilCardInfo,
  CivilCardPhoto,
} from "../Civils.styled";
import { noPhoto } from "../../../../../../services/utils/user";

const Cards = ({ civilData, id, ...props }) => {
  const style = { backgroundImage: `url(${noPhoto("male")})` };

  return (
    <CivilCardContainer
      to={`/mdt/encodage/civil/${id}/avertissement`}
      className="bg-card-item"
      {...props}
    >
      <CivilCardPhoto style={style}></CivilCardPhoto>
      <CivilCardInfo>
        <p>NOM</p>
        <p>Prénom</p>
        <p>555-123456</p>
      </CivilCardInfo>
    </CivilCardContainer>
  );
};

export default Cards;
