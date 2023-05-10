import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { getPostBySlug, getAllPosts } from '@/lib/api';
import { markdownToHtml } from '@/lib/utils';
import Layout from '@/components/Layout';
import PostBody from '@/components/PostBody';

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <article className='mb-32'>
            <Head>
              <title>{post.title}</title>
              <meta property='og:image' content={post.ogImage.url} />
            </Head>
            <h1 className='gradient-text'>{post.title}</h1>
            <br />
            <PostBody content={post.content}></PostBody>
          </article>
        </>
      )}
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
