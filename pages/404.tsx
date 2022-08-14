import PageWrapper from '@/components/layout/pageWrapper';
import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import gif from '../public/images/404.gif';

export default function Custom404() {
  return (
    <PageWrapper>
      <Flex flexDir='column' alignItems='center' pt='1rem'>
        <Heading as='h1' size='4xl' fontFamily={'monospace'} noOfLines={1}>
          404
        </Heading>
        <Heading as='h2' size='2xl' fontFamily={'monospace'} noOfLines={1}>
          Page Not Found
        </Heading>
        <Box className='image-404'>
          <Image src={gif} alt='404'></Image>
        </Box>
        <br />
        <p>Hmmm... something went wrong. Sorry!</p>
        <br />
        <NextLink href='/' passHref>
          <Link className='key-button'> Esc </Link>
        </NextLink>
      </Flex>
    </PageWrapper>
  );
}
