import React from "react";
import {
  firsLetterCapitalise,
  isNotAtribute,
} from "../../../../../../services/utils/textUtils";
import {
  cleanNameAgent,
  cleanNameUser,
} from "../../../../../../services/utils/user";

const CivilDetail = ({ civilData, ...props }) => {
  const {
    firstname,
    lastname,
    birth,
    address,
    phone,
    apartenance,
    job,
    hairColor,
    nationality,
    ethni,
    gender,
  } = civilData;

  return (
    <div>
      <p className="civil-name">{cleanNameUser(firstname, lastname)}</p>
      <ul className="info-detailed">
        <li>
          <p className="label">Née le</p>
          <p>{isNotAtribute(birth)}</p>
        </li>
        <li>
          <p className="label">Addresse</p>
          <p>{isNotAtribute(address)}</p>
        </li>
        <li>
          <p className="label">Téléphone</p>
          <p>{isNotAtribute(phone)}</p>
        </li>
        <li>
          <p className="label">Appartenance</p>
          <p>{isNotAtribute(apartenance)}</p>
        </li>
        <li>
          <p className="label">Emploie</p>
          <p>{isNotAtribute(job)}</p>
        </li>
        <li>
          <p className="label">Cheveux</p>
          <p>{hairColor}</p>
        </li>
        <li>
          <p className="label">Nationalité</p>
          <p>{nationality}</p>
        </li>
        <li>
          <p className="label">Ethnie</p>
          <p>{ethni}</p>
        </li>
        <li>
          <p className="label">Genre</p>
          <p>{gender}</p>
        </li>
      </ul>
    </div>
  );
};

export default CivilDetail;
