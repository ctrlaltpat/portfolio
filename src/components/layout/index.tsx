import { Box, Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import space from '../../../public/images/space.gif';
import Footer from './footer';
import Header from './header';
import IconBackground from './iconBackground';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex
      height={['90%', '100%']}
      flexDir={'column'}
      backgroundImage={`url(${space.src})`}
      backgroundRepeat={'no-repeat'}
      backgroundPosition={'1900px 100%'}
    >
      <Header />
      {/* <IconBackground /> */}
      <Box
        as='main'
        p={['1rem', '1rem 1rem 1rem 110px']}
        w='100%'
        maxW={'1600px'}
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
