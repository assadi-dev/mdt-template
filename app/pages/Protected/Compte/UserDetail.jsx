import React from "react";

const UserDetail = ({ userData, ...props }) => {
  return (
    <>
      <p className="agent-name">Assadi Marshall</p>
      <ul className="info-detailed">
        <li>
          <p className="label">Matricule:</p>
          <p>119</p>
        </li>
        <li>
          <p className="label">Grade:</p>
          <p>Capitaine</p>
        </li>
        <li>
          <p className="label">Division:</p>
          <p>N/A</p>
        </li>
        <li>
          <p className="label">Téléphone:</p>
          <p> 555-123456</p>
        </li>
        <li>
          <p className="label">Date d'arrivé:</p>
          <p>28-09-2023 14:03</p>
        </li>
      </ul>
    </>
  );
};

export default UserDetail;
