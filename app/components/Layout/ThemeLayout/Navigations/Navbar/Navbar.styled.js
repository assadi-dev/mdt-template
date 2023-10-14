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
  z-index: 25;
  // box-shadow: 25px -10px 25px 0px rgba(255, 255, 255, 0.15);
`;

export const UserProfileContainer = styled.div`
  justify-self: end;
  display: flex;
  grid-gap: 10px;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 18px;
  cursor: pointer;
  position: relative;

  .dropdown-user-chevron {
    width: fit-content;
    height: fit-content;
    margin: 0 1rem 0 0;
    display: flex;
    align-items: center;
    svg {
      width: 18px;
      height: 18px;
    }
  }

  .dropdown-absolute {
    position: absolute;
    right: 0;
    top: 130%;
    width: 100%;
  }
`;

export const EndWrapper = styled.div`
  max-width: 25%;
  align-items: center;
`;

export const UsernameStyle = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  min-width: 80px;
  margin: 0px 15px;
  max-width: 280px;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  white-space: nowrap;
  overflow: hidden;
`;

export const Userphoto = styled.div`
  border-radius: 100px;
  width: 50px;
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const UsernameTextRow = styled.div`
  display: flex;
  align-items: center;
`;

export const DropdownContentWrapper = styled.div`
  padding: 0.5rem;
  min-height: 125px;
  font-weight: 500;
  box-shadow: rgba(255, 255, 255, 0.314) 0px 0px 3px 0px;
  border-radius: 5px;
`;

export const UserDropDownListContentWrapper = styled.ul`
  margin: 1.2rem 0 0 1.2rem;
  li {
    display: flex;
    align-items: center;
    min-height: 20px;
    margin-bottom: 1.3rem;
    :last-of-type {
      margin-bottom: 0;
    }
    grid-gap: 1.2rem;
    span {
      width: 25px;
      height: 25px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const PanicButtonContainer = styled.div`
  justify-self: end;
  margin-right: 1.3rem;
`;

export const PanicButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 5px;
  min-width: 80px;
`;
