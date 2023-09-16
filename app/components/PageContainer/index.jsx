import styled from "styled-components";

export const PageContainer = styled.div`
  width: 90%;
  margin: 14px auto;
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
  padding: 1rem 1.3rem;
  border-radius: 5px;
  align-self: center;
`;
