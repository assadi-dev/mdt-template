import React from "react";
import { PreviewGunfightListSeizuresContainer } from "../../Fusillade.styled";

const PreviewGunfightListSeizures = ({ seizures }) => {
  return (
    <PreviewGunfightListSeizuresContainer>
      <p className="mb-1">
        <span className="text-bolder ">Saisies </span>
      </p>
      <ul>
        {seizures?.map((item) => (
          <li key={item.id}>
            <span> {item?.fullname} </span> <span> {item?.seizure} </span>{" "}
            <span> {item?.affiliation} </span>
          </li>
        ))}
      </ul>
    </PreviewGunfightListSeizuresContainer>
  );
};

export default PreviewGunfightListSeizures;
