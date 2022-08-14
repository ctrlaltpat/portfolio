import { Box, Flex, Image as ChakraImage, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Tags from '../media/tags';

export interface TileProps {
  title: string;
  description: string;
  demoUrl?: string;
  repoUrl?: string;
  imgUrl?: string;
  imgAlt?: string;
  status: string;
  tags: string[];
} // TODO: generalise

const Tile: FC<TileProps> = ({
  title,
  description,
  demoUrl,
  repoUrl,
  imgUrl,
  imgAlt,
  status,
  tags,
}) => {
  return (
    <Box
      role={'group'}
      overflow={'hidden'}
      w='100%'
      h={'400px'}
      position={'relative'}
      objectFit={'contain'}
      border='1px solid #2b6cb0'
      borderRadius={'8px'}
      backgroundColor={'brand.bg1'}
      transition={'transform 450ms ease-in-out'}
      sx={{
        flex: '0 0 calc(100% / var(--items-per-screen))',
        'max-width': 'calc(100% / var(--items-per-screen))',
        'aspect-ratio': '16 / 9',
        padding: 'var(--img-gap)',
        margin: '.2rem',
      }}
      _hover={{
        transform: 'scale(1.02)',
      }}
    >
      <Box
        overflow={'hidden'}
        h={'14rem'}
        mt={-2}
        mx={-2}
        pos={'relative'}
        sx={{
          '& > div': {
            position: 'absolute',
            backgroundColor: 'brand.primary',
            borderRadius: '4px',
            padding: '4px',
            transition: 'all .75s ease',
            right: '-80px',
          },
          '& a': {
            textDecoration: 'none!important',
          },
        }}
        _groupHover={{
          '& > div': {
            transform: 'translateX(-90px)',
          },
        }}
      >
        {status && <Box top='10px'>{status}</Box>}
        {demoUrl && (
          <Box top='140px'>
            <Link href={demoUrl} isExternal>
              DEMO
            </Link>
          </Box>
        )}
        {repoUrl && (
          <Box top='180px'>
            <Link href={repoUrl} isExternal>
              REPO
            </Link>
          </Box>
        )}

        <ChakraImage borderRadius='.0rem' src={imgUrl} alt={imgAlt} />
      </Box>
      <Box maxHeight={'110px'} overflowY={'auto'}>
        <Flex direction={'column'}>
          <Box mt={'auto'} padding={'10px'}>
            <Text
              color={'blue.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              {title}
            </Text>
            <Text color={'gray.500'}>{description}</Text>
          </Box>
        </Flex>
      </Box>
      <Tags tags={tags} />
    </Box>
  );
};

export default Tile;
