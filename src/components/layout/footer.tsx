import { Box, Flex } from '@chakra-ui/react';
import { socialLinks } from './socials';

const Footer = () => {
  return (
    <Box
      maxW='1400px'
      margin='0 auto'
      as='footer'
      p='1rem'
      pb={['5.5rem']}
      mt={'auto'}
      w='100%'
      textAlign='center'
    >
      <Flex display={['flex', 'none']}>{socialLinks}</Flex>
    </Box>
  );
};

export default Footer;
