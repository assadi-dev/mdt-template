import React from "react";

const EmptyRow = ({ EmptyRowMessage = "Aucun résultat" }) => {
  return (
    <tr className="empty-row">
      <td colSpan={5}> {EmptyRowMessage}</td>
    </tr>
  );
};

export default EmptyRow;
