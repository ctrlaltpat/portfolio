import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

export interface SnippetProps {
  content: string;
}

export default function Snippet({ content }: SnippetProps) {
  return (
    <article className="snippet">
      <Markdown
        components={{
          code({ inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            const codeString = String(children).replace(/\n$/, "");

            return !inline && match ? (
              <SyntaxHighlighter
                style={nightOwl}
                language={match[1]}
                {...props}
              >
                {codeString}
              </SyntaxHighlighter>
            ) : (
              // TODO <span>copy(children)</span>
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </article>
  );
}
