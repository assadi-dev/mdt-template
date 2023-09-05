import styled from "styled-components";

export const ModalContainer = styled.div`
  border-radius: 8px;
  padding: 1.4rem;
  position: relative;
  width: 100%;
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
  padding: 1.3rem 2rem;
  width: fit-content;
  border-radius: 5px;
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  text-transform: uppercase;
  transition: all 0.35s;
`;

export const ErrorSection = styled.div`
  margin-top: 1rem;
  min-height: 3px;
`;

export const DeleteConfirm = styled.div`
  border-radius: 8px;
  padding: 1.4rem;
  position: relative;
  width: 80%;
  min-height: 50px;
  @media screen and (min-width: 992px) {
    width: 62rem;
  }

  .close-section {
    justify-self: end;
    svg {
      width: 20px;
      height: 20px;
    }
  }

  .title {
    font-size: 1.8rem;
    text-align: center;
    line-height: 26px;
  }
`;

export const HeaderModalDelete = styled.div`
  display: grid;
  height: 25px;
`;

export const AlertMessageSection = styled.div`
  margin-top: 1.3rem;
  padding: 1.3rem;
  width: 100;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: 0px 0px 3px rgba(0, 0, 0, 1);
  border-radius: 5px;
  line-height: 22px;
  .header-icon {
    display: flex;
    justify-content: center;
    margin-bottom: 1.3rem;
    span,
    svg {
      width: 35px;
      height: 35px;
    }
  }
  .content {
    text-align: center;
  }
`;

export const DeleteRowBtn = styled.div`
  width: 100%;
  margin: 1.6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 1.3rem;
`;

export const ConfirmButton = styled.button`
  padding: 1rem 1.3rem;
  width: fit-content;
  transition: all 0.35s;
  border-radius: 5px;
  text-transform: uppercase;
`;
