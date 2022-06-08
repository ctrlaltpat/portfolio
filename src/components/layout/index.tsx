import { Box, Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex height={['90vh','100vh']} flexDir={'column'} bg='brand.bg1' color='brand.text1'>
      <Header />
      <Box as='main' p={['1rem', '1rem 1rem 1rem 110px']} w='100%'>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
