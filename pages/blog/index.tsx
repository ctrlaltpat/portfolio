import BlogCard from '@/components/blogCard';
import PageWrapper from '@/components/layout/pageWrapper';
import { Flex, List, ListItem } from '@chakra-ui/react';
import { ContentfulApi } from '../../lib/contentful';
// import { fetcher } from '../../lib/api';
// import { useState } from 'react';
// import useSWR from 'swr';

const Blog = ({ posts }: any) => { //TODO
  // const [pageIndex, setPageIndex] = useState(1);
  // const { data } = useSWR(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?pagination[page]=${pageIndex}&pagination[pageSize]=3`,
  //   fetcher,
  //   { fallbackData: posts }
  // );

  return (
    <PageWrapper title='Blog'>
      <List mt={'20px'}>
        {/* {data.data.map((post, idx) => ( */}
        {/* <ListItem key={idx} borderRadius={'2px'}> */}
        {/* <BlogCard {...post.attributes}></BlogCard> */}
        {/* </ListItem> */}
        {/* ))} */}
        {posts.map((post: any, idx: string) => ( //TODO
          <ListItem key={idx} borderRadius={'2px'}>
            <BlogCard {...post} />
          </ListItem>
        ))}
      </List>
      <Flex justifyContent={'center'} alignItems={'center'}>
        {/* <button
          className={`key-button ${pageIndex === 1 ? 'disabled' : ''}`}
          disabled={pageIndex === 1}
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          {'<'}
        </button> */}
        {/* <Box margin={'30px'}>{`${pageIndex} of ${
          data && data.meta.pagination.pageCount
        }`}</Box>
        <button
          className={`key-button ${
            pageIndex === (data && data.meta.pagination.pageCount)
              ? 'disabled'
              : ''
          }`}
          disabled={pageIndex === (data && data.meta.pagination.pageCount)}
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          {'>'}
        </button> */}
      </Flex>
    </PageWrapper>
  );
};

export async function getStaticProps() {
  const api = new ContentfulApi();
  const posts = await api.fetchEntries('post');

  // const posts = await fetcher(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?pagination[page]=1&pagination[pageSize]=3`
  // );

  return {
    props: { posts },
    revalidate: 10,
  };
}

export default Blog;
