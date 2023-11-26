import React from "react";
import {
  CivilCardContainer,
  CivilCardInfo,
  CivilCardPhoto,
} from "../Civils.styled";
import { noPhoto } from "../../../../../../services/utils/user";
import { firsLetterCapitalise } from "../../../../../../services/utils/textUtils";

const Cards = ({ civilData, ...props }) => {
  const { id, firstname, lastname, phone, gender } = civilData;

  const style = { backgroundImage: `url(${noPhoto(gender)})` };

  const FIRSTNAME = firsLetterCapitalise(firstname);
  const LASTNAME = lastname.toUpperCase();

  return (
    <CivilCardContainer
      to={`/mdt/encodage/civil/${id}/avertissement`}
      className="bg-card-item"
      {...props}
    >
      <CivilCardPhoto style={style}></CivilCardPhoto>
      <CivilCardInfo>
        <p>{LASTNAME}</p>
        <p>{FIRSTNAME}</p>
        <p>{phone}</p>
      </CivilCardInfo>
    </CivilCardContainer>
  );
};

export default Cards;
