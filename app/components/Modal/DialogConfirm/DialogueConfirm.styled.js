import styled from "styled-components";

export const ErrorSection = styled.div`
  margin-top: 1rem;
  min-height: 10px;
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

export const DialogContent = styled.div`
  padding: 1.2rem;
`;

export const DialogtextTitle = styled.p`
  text-align: center;
  margin-bottom: 2.8rem;
`;
