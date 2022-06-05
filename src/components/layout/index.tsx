import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

const Layout: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <>
      <Header />
      <Box as='main' p={['1rem', '1rem 1rem 1rem 6rem']} w='100%'>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;