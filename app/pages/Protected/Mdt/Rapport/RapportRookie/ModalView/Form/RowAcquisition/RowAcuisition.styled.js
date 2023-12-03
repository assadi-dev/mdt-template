import styled from "styled-components";

export const RowAcquisitionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  grid-gap: 1rem;
  margin-top: 1rem;

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

export const StatIconContainer = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.25s;
`;

export const CardAquisitionItem = styled.div`
  width: 145px;
  height: 52px;
  display: grid;
  text-align: center;
  margin-bottom: 1rem;
  p {
    white-space: nowrap;
    font-size: 1rem;
  }

  svg {
    width: 15px;
    height: 15px;
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 1));
  }
`;
