import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import Strike from "@tiptap/extension-strike";
import ListItem from "@tiptap/extension-list-item";

Markdown.configure({
  html: true, // Allow HTML input/output
  tightLists: true, // No <p> inside <li> in markdown output
  tightListClass: "tight", // Add class to <ul> allowing you to remove <p> margins when tight
  bulletListMarker: "-", // <li> prefix in markdown output
  linkify: true, // Create links from "https://..." text
  breaks: true, // New lines (\n) in markdown input are converted to <br>
  transformPastedText: true, // Allow to paste markdown text in the editor
  transformCopiedText: true, // Copied text is transformed to markdown
});

export const extensions = [StarterKit, Markdown, Strike];
