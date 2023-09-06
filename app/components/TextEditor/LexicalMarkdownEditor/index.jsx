import { $getRoot, $getSelection } from "lexical";
import React, { useEffect } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ListNode, ListItemNode } from "@lexical/list";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import {
  EditorContainer,
  EditorContentStyled,
  Placeholder,
} from "./LexicalMarkdownEditor.styled";
import Toolbar from "./Toolbar";
import LexicalThemeEditor from "./LexicalThemeEditor";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
  TRANSFORMERS,
} from "@lexical/markdown";

const MyCustomAutoFocusPlugin = () => {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  /*   editor.update(() => {
    const markdown = $convertToMarkdownString(TRANSFORMERS);
    console.log(markdown);
  }); */

  return null;
};

function onError(error) {
  console.error(error);
}

const LexicalMarkdownEditor = ({ getTextContent, ...props }) => {
  const initialConfig = {
    editable: true,
    namespace: "MyEditor",
    theme: LexicalThemeEditor,
    onError,
    nodes: [ListNode, ListItemNode],
    editorState: null,
  };

  const onChange = (editorState) => {
    editorState.read(() => {
      // Read the contents of the EditorState here.
      const root = $getRoot();
      const selection = $getSelection();
    });
  };

  return (
    <EditorContainer {...props}>
      <LexicalComposer initialConfig={initialConfig}>
        <Toolbar />
        <EditorContentStyled>
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder>Text</Placeholder>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <OnChangePlugin onChange={onChange} />
          <ListPlugin />
        </EditorContentStyled>
      </LexicalComposer>
    </EditorContainer>
  );
};

export default LexicalMarkdownEditor;
