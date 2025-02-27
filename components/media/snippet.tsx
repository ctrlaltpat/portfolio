import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

export interface SnippetProps {
  content: string;
}

// TODO: update language
export default function Snippet({ content }: SnippetProps) {
  return (
    <article className="snippet">
      <SyntaxHighlighter language={"javascript"} style={nightOwl}>
        {content}
      </SyntaxHighlighter>
    </article>
  );
}
