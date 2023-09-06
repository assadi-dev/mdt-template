import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND, REDO_COMMAND, UNDO_COMMAND } from "lexical";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode,
} from "@lexical/list";
import React from "react";
import { useState } from "react";
import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
  TRANSFORMERS,
} from "@lexical/markdown";

const useOnClicklistener = () => {
  const [editor] = useLexicalComposerContext();
  const [blockType, setBlockType] = useState("paragraph");
  const [selectedElementKey, setSelectedElementKey] = useState(null);
  const [selectedEventTypes, setSelectedEventTypes] = useState([]);

  const onClick = (event) => {
    console.log("event is ", event);
    switch (event) {
      case "bold":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        break;
      case "italic":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        break;
      case "underline":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        break;
      case "strikethrough":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        break;
      case "undo":
        editor.dispatchCommand(UNDO_COMMAND);
        break;
      case "redo":
        editor.dispatchCommand(REDO_COMMAND);
        break;
      case "ul":
        formatBulletList();
        break;
      case "ol":
        formatNumberedList();
        break;

      default:
        break;
    }
  };

  const formatBulletList = () => {
    if (blockType !== "ul") {
      console.log("dispatch command");
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND);
    }
  };

  const formatNumberedList = () => {
    if (blockType !== "ol") {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND);
    }
  };

  return {
    onClick,
  };
};

export default useOnClicklistener;
