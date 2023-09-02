import styled from "styled-components";

export const ModalEditUserContainer = styled.div`
  border-radius: 8px;
  padding: 1.4rem;
  position: relative;
  width: 80%;
  min-height: 100px;
  @media screen and (min-width: 992px) {
    min-width: 690px;
  }

  .form-title {
    font-family: var(--font-title);
    font-size: 1.6rem;
  }
  .close-section {
    justify-self: end;
    svg {
      width: 20px;
      height: 20px;
    }
  }

  .row-label {
    display: flex !important;
    align-items: center;
    grid-gap: 1rem;
  }
`;

export const GridRowHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  .grid-a {
    justify-self: start;
    width: 100%;
  }
  .grid-b {
    justify-self: end;
    width: 180px;
    height: 180px;
  }
`;

export const PhotoAgent = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 3px;
`;
