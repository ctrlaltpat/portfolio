import Layout from '@/components/Layout';
import { getAllPosts } from '@/lib/api';
import PostPreview from '@/components/PostPreview';
import LargeHeading from '@/components/ui/LargeHeading';

type Props = {
  allPosts: PostType[];
};
// TODO: include 10 real posts
export default function Blog({ allPosts }: Props) {
  return (
    <Layout>
      <section>
        <LargeHeading size='sm'>Blog</LargeHeading>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 pt-10'>
          {allPosts.length > 0 &&
            allPosts.map((post) => <PostPreview key={post.slug} {...post} />)}
        </div>
      </section>
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
