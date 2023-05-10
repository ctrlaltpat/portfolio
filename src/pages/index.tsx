import Layout from '@/components/Layout';
import TechExp from '@/components/TechExp';
import Paragraph from '@/ui/Paragraph';
import { getAllPosts } from '@/lib/api';
import PostPreview from '@/components/PostPreview';

type Props = {
  allPosts: PostType[];
};

export default function Home({ allPosts }: Props) {
  return (
    <Layout>
      <div className='relative flex items-center justify-center md:justify-normal overflow-x-hidden'>
        {/* h-screen */}
        <div className='pt-4 md:pt-20'>
          <div
            className='w-full h-full gap-2 flex flex-col 
          justify-center'
          >
            <h1 className='gradient-text'>Hello, I&apos;m Patrick</h1>
            <TechExp />
            <Paragraph className='text-left'>
              {/* &#128376;  */}
              &#128187; Web Developer
              <br />
              &#127468;&#127463; London-based
              <br />
              &#127918; Gamer
              <br />
              &#128764; Skater
            </Paragraph>
            <div className='my-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4'>
              {allPosts.length > 0 &&
                allPosts
                  .slice(0, 2)
                  .map((post) => <PostPreview key={post.slug} {...post} />)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
