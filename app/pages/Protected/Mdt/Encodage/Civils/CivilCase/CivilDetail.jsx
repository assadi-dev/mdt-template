import React from "react";
import {
  firsLetterCapitalise,
  isNotAtribute,
} from "../../../../../../services/utils/textUtils";
import {
  cleanGender,
  cleanNameUser,
} from "../../../../../../services/utils/user";
import { Button } from "../../../../../../components/PageContainer";
import { RowAction } from "./CivilCase.style";
import { formatDatefrWithoutHour } from "../../../../../../services/utils/dateFormat";

const CivilDetail = ({ civilData, ...props }) => {
  const {
    id,
    firstname,
    lastname,
    birthdate,
    identificationNumber,
    address,
    phone,
    affiliation,
    job,
    hairColor,
    nationality,
    ethnie,
    gender,
  } = civilData;

  return (
    <div>
      <p className="civil-name">{cleanNameUser(firstname, lastname)}</p>
      <ul className="info-detailed">
        <li>
          <p className="label">N° Identification</p>
          <p>{isNotAtribute(identificationNumber)}</p>
        </li>
        <li>
          <p className="label">Née le</p>
          <p>{isNotAtribute(formatDatefrWithoutHour(birthdate))}</p>
        </li>
        {/*  
          <li>
          <p className="label">Addresse</p>
          <p>{isNotAtribute(address)}</p>
        </li> 
        */}
        <li>
          <p className="label">Téléphone</p>
          <p>{isNotAtribute(phone)}</p>
        </li>
        <li>
          <p className="label">Appartenance</p>
          <p>{isNotAtribute(affiliation)}</p>
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
          <p>{ethnie}</p>
        </li>
        <li>
          <p className="label">Genre</p>
          <p>{cleanGender(gender)}</p>
        </li>
      </ul>
      <RowAction>
        <Button className="bg-btn-theme-color">Mettre à jour</Button>
      </RowAction>
    </div>
  );
};

export default CivilDetail;
