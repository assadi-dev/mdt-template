import styled from "styled-components";

export const PageContainer = styled.div`
  width: 90%;
  margin: 14px auto;
  .s0 {
    opacity: 1;
    fill: #fcfcf9;
  }
  .s1 {
    opacity: 1;
    fill: #cabe80;
  }
  .s2 {
    opacity: 1;
    fill: #e3c370;
  }
  .s3 {
    opacity: 1;
    fill: #fbfbe9;
  }
  .s4 {
    opacity: 1;
    fill: #faf7c6;
  }
  .s5 {
    opacity: 1;
    fill: #f1e2b6;
  }
  .s6 {
    opacity: 1;
    fill: #f7e188;
  }
  .s7 {
    opacity: 0.9;
    fill: #a39561;
  }
  .s8 {
    opacity: 0.9;
    fill: #a4a980;
  }
  .s9 {
    opacity: 0.4;
    fill: #5a624e;
  }
  .s10 {
    opacity: 0.6;
    fill: #787a60;
  }
  .s11 {
    opacity: 0.2;
    fill: #414942;
  }
  .s12 {
    opacity: 1;
    fill: #5d3213;
  }
  .s13 {
    opacity: 1;
    fill: #00fbf7;
  }
  .s14 {
    opacity: 0.5;
    fill: #3f3f2d;
  }
  .s15 {
    opacity: 0.9;
    fill: #7b5e44;
  }
  .s16 {
    opacity: 0.9;
    fill: #0a0d14;
  }
  .s17 {
    opacity: 1;
    fill: #0cbdbb;
  }
  .s18 {
    opacity: 1;
    fill: #03f918;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const RowAction = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 25px;
  align-items: center;
  margin-bottom: 1.4rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const ActionButton = styled.button`
  padding: 1rem 1.6rem;
  border-radius: 5px;
  align-self: center;
  min-width: 100px;
`;

export const Button = styled.button`
  padding: 1rem 1.6rem;
  border-radius: 5px;
  align-self: center;
  min-width: 100px;
`;

export const PageUserDetail = styled.div`
  width: 100%;
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 350px 1fr;
  }
`;

export const AsideBarUser = styled.div`
  width: 240px;
  padding: 2.3rem 2rem;
  border-radius: 8px;
  min-height: 75vh;
  @media screen and (min-width: 992px) {
    padding: 2.3rem 3.2rem;
  }
`;

export const AsideBarUserDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .photo {
    width: 100%;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    aspect-ratio: 1;
    border-radius: 8px;
  }

  .agent-name,
  .civil-name {
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 2rem 0;
    text-align: center;
    @media screen and (min-width: 992px) {
      font-size: 1.8rem;
    }
  }

  .info-detailed {
    margin-top: 1.3rem;
    font-size: 1.3rem;
    li:not(:last-of-type) {
      margin-bottom: 1rem;
    }

    li {
    }

    p {
      max-width: 100%;
      margin-bottom: 0.3rem;
    }
  }

  .label {
    font-weight: bold;
    margin-right: 0.4rem;
  }
`;
