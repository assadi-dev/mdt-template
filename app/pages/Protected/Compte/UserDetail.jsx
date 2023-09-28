import React from "react";
import { useSelector } from "react-redux";
import {
  firsLetterCapitalise,
  isNotAtribute,
} from "../../../services/utils/textUtils";
import { datetimeFormatFr } from "../../../services/utils/dateFormat";
import { cleanNameAgent } from "../../../services/utils/user";

const UserDetail = ({ userData, ...props }) => {
  const {
    idAgent,
    iban,
    division,
    phone,
    lastname,
    firstname,
    grade,
    matricule,
    faction,
    createdAt,
  } = useSelector((state) => state.AuthenticateReducer);

  return (
    <>
      <p className="agent-name">{cleanNameAgent(firstname, lastname)}</p>
      <ul className="info-detailed">
        <li>
          <p className="label">IBAN:</p>
          <p>{isNotAtribute(iban)}</p>
        </li>
        <li>
          <p className="label">Matricule:</p>
          <p>{isNotAtribute(matricule)}</p>
        </li>
        <li>
          <p className="label">Grade:</p>
          <p>{firsLetterCapitalise(grade)}</p>
        </li>
        <li>
          <p className="label">Division:</p>
          <p>{isNotAtribute(division)}</p>
        </li>
        <li>
          <p className="label">Téléphone:</p>
          <p>{phone}</p>
        </li>
        <li>
          <p className="label">Date d'arrivé:</p>
          {<p>{createdAt && datetimeFormatFr(createdAt)}</p>}
        </li>
      </ul>
    </>
  );
};

export default UserDetail;
