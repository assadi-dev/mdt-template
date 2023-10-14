import React, { useState } from "react";
import {
  EditorProvider,
  FloatingMenu,
  BubbleMenu,
  EditorContent,
  useEditor,
} from "@tiptap/react";
import { extensions } from "./configure";
import MenuBar from "./MenuBar";
import { EditorContentContainer } from "./MarkdownTextEditor.styled";

const MarkdowTextEditor = ({ getOutput, defaultValue = "", ...props }) => {
  const editor = useEditor({
    content: defaultValue,
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
