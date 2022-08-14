import PageWrapper from '@/components/layout/pageWrapper';
import {
  Box,
  Center,
  CircularProgress,
  Flex,
  Link,
  Text,
} from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { ContentfulApi } from '../../lib/contentful';
// import { fetcher } from '../../lib/api';

const BlogPost: FC<Post> = ({ post }: any) => { // TODO
  const router = useRouter();

  console.log(post);

  if (router.isFallback) {
    return (
      <Center>
        <CircularProgress isIndeterminate color='brand.primary' />
      </Center>
    );
  }

  const { updatedAt } = post.sys;
  const { title, content, coverImage } = post.fields;

  return (
    <Box>
      <PageWrapper title={title}>
        <Flex alignItems={'baseline'}>
          <NextLink href={'/blog'} passHref>
            <Link className='key-button'>{`<`}</Link>
          </NextLink>
          <Text m={'10px'} color='brand.primary'>
            Published: {new Date(updatedAt).toDateString()}
          </Text>
        </Flex>
        <Flex alignItems={'center'} flexDir={'column'}>
          <Box maxWidth={'300px'} m={'0 auto'}>
            <Image
              alt={coverImage.fields.title}
              src={'https:' + coverImage.fields.file.url}
              width={coverImage.fields.file.details.image.width}
              height={coverImage.fields.file.details.image.height}
              style={{
                borderRadius: '10px',
              }}
            />
          </Box>
          <Box m='1rem auto'>
            <Box p={'10px'}>{documentToReactComponents(content)}</Box>
          </Box>
        </Flex>
      </PageWrapper>
    </Box>
  );
};

export async function getStaticPaths() {
  // const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts`);

  // return {
  //   paths: response.data.map((post) => ({
  //     params: {
  //       slug: post.attributes.slug,
  //     },
  //   })),
  //   fallback: false,
  // };
  const api = new ContentfulApi();
  const posts = await api.fetchEntries('post');

  return {
    paths: posts.map((post: any) => ({
      // TODO
      params: {
        slug: post.fields.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) { //TODO
  // const response = await fetcher(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?filters\[Slug\][$eq]=${params.slug}`
  // );
  const api = new ContentfulApi();
  const post = await api.fetchBySlug('post', params.slug);
  return {
    props: { post },
    // revalidate: 1,
  };
}

export default BlogPost;
