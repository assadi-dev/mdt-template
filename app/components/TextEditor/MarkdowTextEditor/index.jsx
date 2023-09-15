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

const MarkdowTextEditor = ({ getOutput, ...props }) => {
  const [content, setContent] = useState("");

  const editor = useEditor({
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
