import { Box, Link, Text } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import Tags from './tags';

const MediaLink = ({ media }) => {
  return (
    <Box
      position={'relative'}
      backgroundImage={`url(${media.fields.thumbnail})`}
      backgroundRepeat={'no-repeat'}
      backgroundPosition={'center'}
      backgroundSize={'cover'}
      borderRadius={'8px'}
      sx={{ breakInside: 'avoid' }}
    >
      <Box
        sx={{
          position: 'absolute',
          backgroundColor: 'brand.primary',
          borderRadius: '4px',
          padding: '4px',
          top: '10px',
          right: '10px',
          transition: 'all 300ms ease',
          '& a': {
            textDecoration: 'none!important',
          },
        }}
        _hover={{ transform: 'scale(1.3)' }}
      >
        <Link href={media.fields.url} isExternal>
          <FiExternalLink />
        </Link>
      </Box>
      <Box
        pt={'8rem'}
        px={'1rem'}
        pb={'2rem'}
        borderRadius={'8px'}
        textShadow={'#000000a6 2px 2px 2px'}
        backgroundColor={'brand.bg3'}
      >
        <Text fontSize={'1.4rem'} fontWeight={500}>
          {media.fields.title}
        </Text>
      </Box>
      <Tags tags={media.fields.tags} />
    </Box>
  );
};

export default MediaLink;
