import PageWrapper from '@/components/layout/page-wrapper';
import { Box, Center, Container, Divider, Flex, Link } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import thanks from '../public/images/b99-noticed.gif';

const About: NextPage = () => {
  return (
    <PageWrapper title='About'>
      <Center>
        <Flex flexDirection='column' alignItems='center'>
          <Box m='2rem auto'>
            <Image src={thanks} alt='Thanks for coming by.'></Image>
          </Box>
          <Box m='1rem auto'>
            <Container>
              <p>Hey, thanks for visiting. </p>
              <Divider m='2rem 0'></Divider>
              <Link
                href='https://www.linkedin.com/in/patrickcpilgrim/'
                isExternal
              >
                LinkedIn
              </Link>
              <Divider m='2rem 0'></Divider>
              {Array.from(Array(50)).map((t, i) => (
                <p key={i}>this is some text</p>
              ))}
            </Container>
          </Box>
        </Flex>
      </Center>
    </PageWrapper>
  );
};

export default About;
