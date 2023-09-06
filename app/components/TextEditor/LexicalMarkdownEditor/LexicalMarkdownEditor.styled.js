import styled from "styled-components";

export const EditorContainer = styled.div`
  border: 1px solid #fff;
  width: 100%;
  border-radius: 5px;
  .editor-input {
    position: relative;
    width: 100%;
    min-height: 100px;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const EditorContentStyled = styled.div`
  position: relative;
  width: 100%;
`;

export const Placeholder = styled.span`
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

export const Toolbarcontainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  grid-gap: 1.3rem;
`;

export const ToolbarButton = styled.span`
  display: block;
  opacity: 0.35;
  cursor: pointer;
  &:hover {
    opacity: 1;
    border-radius: 3px;
  }
  width: 35px;
  height: 35px;
  display: grid;
  place-content: center;
  svg {
    width: 25px;
    height: 25px;
  }
`;
