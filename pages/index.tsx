import PageWrapper from '@/components/layout/pageWrapper';
import { Box, Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import garbage from '../public/images/garbage.gif';

const Home: NextPage = () => {
  return (
    <>
      <PageWrapper>
        <Flex
          flexDir={['column', 'column', 'row']}
          justifyContent={'flex-start'}
          className='jtron'
        >
          <Box
            position={'relative'}
            h={['150px', '150px', '200px']} //, '350px']}
            minW={['270px', '270px', '320px']} //, '500px']}
          >
            <Box className={'kb-container'} ml={['0', '0', '0', '2rem']}>
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
          <Box mt={['0', '0', 'auto']}>
            <Heading
              as='h1'
              color={'brand.primary'}
              fontFamily={'monospace'}
              textShadow={'-2px 2px 1px rgba(0,0,0,.6)'}
              size='2xl'
              noOfLines={3}
            >
              WEB DEVELOPER
            </Heading>
            <Heading
              as='h2'
              color={'brand.primary'}
              fontFamily={'monospace'}
              textShadow={'-2px 2px 1px rgba(0,0,0,.6)'}
              size='xs'
            >
              HTML | CSS | JS | TS | React | Responsive Web Development
            </Heading>
          </Box>
        </Flex>
        <br />
        <Box h={'600px'} pos={'relative'} p={'40px 10px'}>
          {/* <p>Featured Projects.......</p> */}
          <Heading
            as='h3'
            color={'brand.primary'}
            fontFamily={'monospace'}
            textShadow={'-2px 2px 1px rgba(0,0,0,.6)'}
          >
            Under Construction...
          </Heading>
          <Box pos={'absolute'} bottom={0} right={0}>
            <Image src={garbage} alt='no featured projects...'></Image>
          </Box>
        </Box>
      </PageWrapper>
    </>
  );
};

export default Home;
