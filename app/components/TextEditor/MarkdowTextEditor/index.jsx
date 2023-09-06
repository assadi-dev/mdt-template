import React, { useState } from "react";
import {
  EditorProvider,
  FloatingMenu,
  BubbleMenu,
  EditorContent,
} from "@tiptap/react";
import { extensions } from "./configure";
import { Editor } from "@tiptap/core";
import MenuBar from "./MenuBar";
import { EditorContentContainer } from "./MarkdownTextEditor.styled";

const MarkdowTextEditor = ({ getOutput, ...props }) => {
  const [content, setContent] = useState("");

  const editor = new Editor({
    content,
    extensions,
    onUpdate({ editor }) {
      const markdownOutput = editor.storage.markdown.getMarkdown();
      if (getOutput) getOutput(markdownOutput);
    },
  });

  return (
    <EditorContentContainer {...props}>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </EditorContentContainer>
  );
};

export default MarkdowTextEditor;
