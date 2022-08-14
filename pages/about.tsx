import ContactForm from '@/components/form/contact';
import PageWrapper from '@/components/layout/pageWrapper';
import { Box, Center, Container, Flex, Link } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import NextLink from 'next/link';
import thanks from '../public/images/b99-noticed.gif';
import { SOCIAL_LINKS } from '../src/constants';

const LINK_COLOUR = 'brand.primary';

const About: NextPage = () => {
  return (
    <>
      <PageWrapper title='About'>
        <Center>
          <Flex flexDirection='column' alignItems='center'>
            <Box m='2rem auto'>
              <Image
                style={{
                  borderRadius: '8px',
                }}
                src={thanks}
                alt='Thanks for coming by.'
              ></Image>
            </Box>
            <Box m='1rem auto'>
              <Container>
                <p>Hey, thanks for visiting! </p>
                <br />
                <p>
                  My name is Patrick, and I&apos;m a creative{' '}
                  {/* <s>
                    <Link
                      href='https://www.16personalities.com/infp-personality'
                      isExternal
                    >
                      weird muggle
                    </Link>
                  </s>{' '} */}
                  web developer based in London, UK. I&apos;m currently
                  specialising in Front-End web development but always
                  interested in working on the full stack.
                </p>
                <br />
                <p>
                  This website is a personal portfolio to display a few{' '}
                  <NextLink href={'/projects'} passHref>
                    <Link color={LINK_COLOUR}>projects</Link>
                  </NextLink>
                  , share knowledge and hopefully inspire others during my
                  muggle struggle. The repo can be found{' '}
                  <Link href={'/github'} color={LINK_COLOUR}>
                    here
                  </Link>
                  .
                </p>
                <br />
                <p>
                  Feel free to say hello on{' '}
                  <Link
                    color={LINK_COLOUR}
                    href={SOCIAL_LINKS.LINKEDIN}
                    isExternal
                  >
                    LinkedIn
                  </Link>{' '}
                  or{' '}
                  <Link
                    color={LINK_COLOUR}
                    href={SOCIAL_LINKS.TWITTER}
                    isExternal
                  >
                    Twitter
                  </Link>
                  {/* , but don&apos;t expect a speedy reply ;) */}.
                </p>
                <p
                  style={{
                    fontSize: '20px',
                    margin: '2rem auto',
                    textAlign: 'center',
                    fontFamily: 'monospace',
                  }}
                >
                  OR
                </p>
                <ContactForm />
              </Container>
            </Box>
          </Flex>
        </Center>
      </PageWrapper>
    </>
  );
};

export default About;
