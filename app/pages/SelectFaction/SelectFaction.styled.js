import styled from "styled-components";
import { blank_img } from "../../config/constantes";

export const SelectFactionsWrapper = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  overflow: hidden;
  max-height: 100vh;
`;

export const SelectFactionsheader = styled.div`
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 80px;
  box-shadow: 0px -5px 28px 0px rgba(255, 255, 255, 0.15);
  padding: 1rem;
`;

export const TitleHeaderFaction = styled.h1`
  font-size: 3.8rem;
  font-family: var(--font-title);
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const SelectFactionRow = styled.div`
  width: 100%;
  margin: 8% auto 5rem auto;
  @media screen and (min-width: 992px) {
    height: 35vh;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 12rem;
    padding: 1rem;
  }
`;

export const SelectFactionIndicatorCard = styled.div`
  width: 100%;
  min-height: 40px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.25);
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9);
  margin: 2rem auto 2rem auto;
  text-transform: uppercase;
  transition: all 0.35s;
  @media screen and (min-width: 992px) {
    width: 480px;
    padding: 1.8rem;
    border-radius: 10px;
  }
  text-align: center;
  .row-selected-faction {
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    align-items: center;
    grid-gap: 1rem;
  }
`;

export const FactionItemContainer = styled.div`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  transition: all 0.25s;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 2px 0 rgba(11, 11, 11, 0.15);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: ${({ emblem }) => (emblem ? `url(${emblem})` : ``)};
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 25px 3px rgba(255, 255, 255, 0.45);
    transform: scale(1.1) translateY(-25px);
  }

  @media screen and (min-width: 992px) {
    width: 200px;
    height: 200px;
  }
`;

export const EmblemMini = styled.div`
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
    height: 45px;
    width: 45px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: ${({ img }) => (img ? `url(${img})` : ``)};
    justify-self: center;
    :first-of-type {
      justify-self: start;
    }
    :last-of-type {
      justify-self: end;
    }
  }
`;
