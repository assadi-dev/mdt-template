import styled from "styled-components";

export const ModalContainer = styled.div`
  border-radius: 8px;
  padding: 1.4rem;
  position: relative;
  width: 80%;
  min-height: 100px;
  @media screen and (min-width: 992px) {
    width: 62rem;
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

export const HeaderModal = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 0.25fr;
  width: 100%;
  margin-bottom: 1.3rem;
`;

export const FormContainer = styled.form`
  padding: 1.2rem;
  .form-control {
    margin-bottom: 1.3rem;
  }
`;

export const ModalFooter = styled.div`
  margin: 1.6rem 0;
  width: 100%;
  display: grid;
  place-items: center;
`;

export const SubmitButton = styled.button`
  padding: 1rem 2rem;
  width: fit-content;
  border-radius: 3px;
  display: flex;
  align-items: center;
  grid-gap: 1rem;
`;

export const ErrorSection = styled.div`
  margin-top: 1rem;
  min-height: 10px;
`;
