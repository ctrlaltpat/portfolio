import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import gif from '../public/images/404.gif';

export default function Custom404() {
  return (
    <Flex
      flexDir='column'
      height='40rem'
      alignItems='center'
      pt='4rem'
    >
      <Box as='h1' fontSize='4rem' textAlign='center' color='gray.800'>
        404
      </Box>
      <Box as='h2' fontSize='3rem' color='gray.700'>
        Page Not Found
      </Box>
      <Box className='image-404'>
        <Image src={gif} alt='404'></Image>
      </Box>
    </Flex>
  );
}
