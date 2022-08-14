import { Box, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { githubIoBg } from '../../styles/theme/bg';

const BlogCard = (post) => {
  const { updatedAt } = post.sys;
  const { title, description, coverImage, slug } = post.fields;
  const borderRadius = '4px';

  return (
    <Box
      minH={['400px', '200px']}
      display={'flex'}
      flexDirection={['column', 'column', 'row']}
      m={'10px'}
      boxShadow={'2px 2px 5px #232323, -1px -1px 5px #232323'}
      borderRadius={borderRadius}
      backgroundColor={'brand.bg1'}
      fontFamily={'monospace'}
      transition={'600ms'}
      _hover={{
        boxShadow: '2px 2px 5px #2b6cb060, -1px -1px 5px #2b6cb060',
      }}
    >
      <Box
        minW={['100%', '100%', '200px']}
        minH={'200px'}
        background={githubIoBg}
        backgroundImage={`url(https:${coverImage.fields.file.url})`}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        position={'relative'}
        borderTopRadius={[borderRadius, 0, 0]}
        borderLeftRadius={[0, 0, borderRadius]}
        borderTopLeftRadius={borderRadius}
      >
        <Text pos={'absolute'} bottom={'2px'} left={'8px'}>
          {new Date(updatedAt).toDateString()}
        </Text>
      </Box>
      <LinkBox
        flex={'1'}
        p={'30px 10px'}
        border={'1px solid #2b6cb040'}
        borderRightRadius={[0, 0, borderRadius]}
        borderBottomRadius={[borderRadius, borderRadius, 0]}
      >
        <Heading as={'h2'} size='lg' fontFamily={'monospace'} mb={'10px'}>
          {title}
        </Heading>
        <Text>{description}</Text>
        <LinkOverlay href={`/blog/${slug}`}></LinkOverlay>
      </LinkBox>
    </Box>
  );
};

export default BlogCard;
