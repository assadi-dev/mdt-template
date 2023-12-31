import styled from "styled-components";

export const EditorContentContainer = styled.div`
  border-radius: 8px;
  overflow-x: hidden;

  .is-active {
    opacity: 1;
  }
  .tiptap {
    overflow-y: auto;
    padding: 1.3rem;
    background-color: rgba(0, 0, 0, 0.5);
    min-height: 145px;
    max-height: 186px;
    width: 100%;
  }
  p {
    margin-bottom: 1em;
  }

  u {
    text-decoration: underline;
  }

  ul,
  ol {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    p {
      margin: 0;
    }
  }
  s {
    text-decoration: line-through;
  }

  & ul {
    li {
      list-style: disc;
    }
  }
  & ol {
    li {
      list-style: numeric;
    }
  }
`;

export const MenuBarRowBtn = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  grid-gap: 1.3rem;
`;

export const MenuBarBtn = styled.button`
  padding: 0;
  font-size: 1em;
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
