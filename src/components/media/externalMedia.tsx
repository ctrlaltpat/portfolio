import { Box, Link, Text } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import Tags from './tags';

const MediaLink = ({ media }: any) => {
  return (
    <Box
      position={'relative'}
      role={'group'}
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
          zIndex: '5',
          transition: 'all 300ms ease',
          '& a': {
            textDecoration: 'none!important',
          },
        }}
        _groupHover={{ fontSize: '30px' }}
      >
        <Link href={media.fields.url} isExternal>
          <FiExternalLink />
        </Link>
      </Box>
      <Box
        height={'200px'}
        padding={'20px'}
        borderRadius={'8px'}
        textShadow={'#000000a6 2px 2px 2px'}
        backgroundColor={'brand.bg3'}
      >
        <Text
          fontSize={'1.4rem'}
          fontWeight={500}
          opacity={1}
          transition={'opacity 450ms ease'}
          _groupHover={{ opacity: 0.1 }}
        >
          {media.fields.title}
        </Text>
      </Box>
      <Tags tags={media.fields.tags} />
    </Box>
  );
};

export default MediaLink;
