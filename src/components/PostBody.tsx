import markdownStyles from '@/styles/markdown.module.css';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className='max-w-5xl mx-auto blog-post'>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
