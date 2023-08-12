import styled from "styled-components";

export const TabsContentContainer = styled.div`
  display: grid;
  @media screen and (min-width: 992px) {
    margin-top: 62px;
    grid-template-columns: 0.38fr 1fr;
    grid-gap: 18px;
    padding-bottom: 22px;
  }
`;

export const GradesColCOntainer = styled.div`
  padding-top: 2rem;
  border-right: solid 2px red;
  width: 100%;
  min-height: 200px;
`;

export const GradesListeContainer = styled.ul``;
