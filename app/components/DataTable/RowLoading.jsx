import React from "react";

const RowLoading = ({ loadingMessage = "Chargement en cours" }) => {
  return (
    <tr className="loading-row">
      <td colSpan={100}> {loadingMessage}</td>
    </tr>
  );
};

export default RowLoading;
