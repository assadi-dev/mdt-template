import styled from "styled-components";

export const RowAcquisitionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  grid-gap: 1rem;
  margin-top: 1.3rem;

  .good {
    color: #fff;
  }
  .warning {
    color: #000;
  }
  .bad {
    color: #fff;
  }
`;

export const StatIconContainer = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  display: grid;
  place-items: center;
  margin: 0 auto;
  filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 1));
`;

export const CardAquisitionItem = styled.div`
  width: 145px;
  height: 62px;
  display: grid;
  text-align: center;
  margin-bottom: 1rem;
  p {
    white-space: nowrap;
    font-size: 1.2rem;
  }

  svg {
    width: 15px;
    height: 15px;
    overflow: hidden;
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 1));
  }
`;
