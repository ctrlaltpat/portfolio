import Markdown from "react-markdown";

export interface NoteProps {
  content: string;
}

export default function Note({ content }: NoteProps) {
  return (
    <article className="note">
      <Markdown>{content}</Markdown>
    </article>
  );
}
