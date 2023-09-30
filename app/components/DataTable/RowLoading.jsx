import React from "react";
import SpinnerLoading from "../Shared/Loading/SpinnerLoading";
import { LoadingLabelMessage, SpinnerLoaderContent } from "./DataTable.styled";

const RowLoading = ({ loadingMessage = "Chargement en cours" }) => {
  return (
    <tr className="loading-row">
      <td colSpan={100}>
        <SpinnerLoaderContent>
          <SpinnerLoading />
        </SpinnerLoaderContent>
        <LoadingLabelMessage> {loadingMessage}</LoadingLabelMessage>
      </td>
    </tr>
  );
};

export default RowLoading;
