import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  padding: 1.2rem;
  position: sticky;
  top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  width: 100%;

  // box-shadow: 25px -10px 25px 0px rgba(255, 255, 255, 0.15);
`;

export const UserProfileContainer = styled.div`
  width: 25%;
  justify-self: end;
  display: flex;
  align-items: center;
  grid-gap: 10px;
  justify-content: flex-end;
`;

export const UsernameStyle = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  min-width: 80px;
  margin: 0px 15px;
  max-width: 280px;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  overflow: hidden;
`;

export const GradeNameStyle = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 5px;
  text-align: center;
  min-width: 80px;
  max-width: 180px;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  overflow: hidden;
`;

export const Userphoto = styled.div`
  border-radius: 100px;
  width: 50px;
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
