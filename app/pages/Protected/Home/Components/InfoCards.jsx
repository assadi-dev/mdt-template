import React from "react";
import {
  InfoCardContainer,
  InfoCardContent,
  InfoCardIcon,
  InfoCardTitle,
} from "../Home.styled";
import { MonotoneClipoard } from "../../../../components/Svg/Home.icon";
import SpinnerButton from "../../../../components/Shared/Loading/SpinnerButton";
import SpinnerLoading from "../../../../components/Shared/Loading/SpinnerLoading";

const InfoCards = ({ title, count = 0, loading = false, ...props }) => {
  return (
    <InfoCardContainer {...props}>
      <InfoCardTitle className="info-card-title">{title}</InfoCardTitle>
      <InfoCardIcon className="info-card-icon">
        <MonotoneClipoard />{" "}
      </InfoCardIcon>
      <InfoCardContent>
        {loading ? <SpinnerLoading size={45} /> : count}
      </InfoCardContent>
    </InfoCardContainer>
  );
};

export default InfoCards;
