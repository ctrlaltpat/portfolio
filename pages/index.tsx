import IconBackground from '@/components/layout/iconBackground';
import PageWrapper from '@/components/layout/pageWrapper';
import { Box, Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';

// const buttons: { text: string; key: string }[] = [
//   { text: 'ctrl', key: 'Control' },
//   { text: 'alt', key: 'Alt' },
//   { text: 'pat', key: 'KeyP,KeyA,KeyT' },
// ];

const Home: NextPage = () => {
  return (
    <>
      <IconBackground />
      <PageWrapper>
        <Flex
          flexDir={['column', 'column', 'row']}
          justifyContent={'flex-start'}
          className='jtron'
        >
          <Box
            position={'relative'}
            h={['150px', '150px', '200px']}
            mr={['0', '0', '40px']}
          >
            {/* {buttons.map(({ text, key }, idx) => (
              <Box className={`kb-container ${text}`} key={`${key}${idx}`}>
                <Box className={`key-button`}>{text}</Box>
              </Box>
            ))} */}
            <Box className={'kb-container'} ml={['0','0','0','2rem']}>
              <Box className={`key-button`}>Ctrl</Box>
            </Box>
            <br />
            <Box className={'kb-container'}>
              <Box className={`key-button`}>Alt</Box>
            </Box>
            <Box className={'kb-container'} marginLeft={'1rem'}>
              <Box className={`key-button`}>Pat</Box>
            </Box>
          </Box>
          <Box mt={['0', '0', '120px']}>
            <Heading
              as='h1'
              color={'brand.primary'}
              fontFamily={'monospace'}
              textShadow={'-2px 2px 1px rgba(0,0,0,.6)'}
              size='2xl'
              noOfLines={3}
            >
              Software Engineer
            </Heading>
            <Heading
              as='h2'
              color={'brand.primary'}
              fontFamily={'monospace'}
              textShadow={'-2px 2px 1px rgba(0,0,0,.6)'}
              size='xs'
            >
              Web - Mobile - Desktop - Games
            </Heading>
          </Box>
        </Flex>
        <Box>
          Featured Projects
        </Box>
      </PageWrapper>
    </>
  );
};

export default Home;
