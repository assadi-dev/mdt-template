import React, { useCallback } from "react";
import { MenuBarBtn, MenuBarRowBtn } from "./MarkdownTextEditor.styled";
import { BiUndo, BiRedo } from "react-icons/bi";
import { BsListUl, BsListOl } from "react-icons/bs";

const MenuBar = ({ editor }) => {
  return (
    <>
      <MenuBarRowBtn>
        <MenuBarBtn
          style={{ fontWeight: "bold" }}
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          G
        </MenuBarBtn>
        <MenuBarBtn
          type="button"
          style={{ fontStyle: "italic", fontFamily: "serif" }}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          I
        </MenuBarBtn>
        <MenuBarBtn
          type="button"
          style={{ textDecoration: "underline" }}
          className={editor.isActive("underline") ? "is-active" : ""}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
        >
          S
        </MenuBarBtn>
        <MenuBarBtn
          type="button"
          style={{ textDecoration: "line-through" }}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strikethrough") ? "is-active" : ""}
        >
          ab
        </MenuBarBtn>

        <MenuBarBtn
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <BsListUl />
        </MenuBarBtn>
        <MenuBarBtn
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <BsListOl />
        </MenuBarBtn>
        <MenuBarBtn
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <BiUndo />
        </MenuBarBtn>
        <MenuBarBtn
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <BiRedo />
        </MenuBarBtn>
      </MenuBarRowBtn>
    </>
  );
};

export default MenuBar;
