import React from "react";
import {
  ToolbarButton,
  Toolbarcontainer,
} from "./LexicalMarkdownEditor.styled";
import useOnClicklistener from "./useOnClicklistener";
import { BiUndo, BiRedo } from "react-icons/bi";
import { BsListUl, BsListOl } from "react-icons/bs";

const Toolbar = () => {
  const { onClick } = useOnClicklistener();

  return (
    <Toolbarcontainer>
      <ToolbarButton
        style={{ fontWeight: "bold" }}
        onClick={() => onClick("bold")}
      >
        G
      </ToolbarButton>
      <ToolbarButton
        style={{ fontStyle: "italic", fontFamily: "serif" }}
        onClick={() => onClick("italic")}
      >
        I
      </ToolbarButton>
      <ToolbarButton
        style={{ textDecoration: "underline" }}
        onClick={() => onClick("underline")}
      >
        S
      </ToolbarButton>
      <ToolbarButton
        style={{ textDecoration: "line-through" }}
        onClick={() => onClick("strikethrough")}
      >
        ab
      </ToolbarButton>
      <ToolbarButton onClick={() => onClick("ul")}>
        {" "}
        <BsListUl />{" "}
      </ToolbarButton>
      <ToolbarButton onClick={() => onClick("ol")}>
        <BsListOl />
      </ToolbarButton>
      <ToolbarButton onClick={() => onClick("undo")}>
        <BiUndo />{" "}
      </ToolbarButton>
      <ToolbarButton onClick={() => onClick("redo")}>
        <BiRedo />{" "}
      </ToolbarButton>
    </Toolbarcontainer>
  );
};

export default Toolbar;
