import { Box, Flex } from '@chakra-ui/react';
import { socialLinks } from './socials';

const Footer = () => {
  return (
    <Box
      maxW='1400px'
      margin='0 auto'
      as='footer'
      p='1rem'
      pb={['5.5rem', '2rem']}
      mt={'auto'}
      w='100%'
      textAlign='center'
    >
      {/* <Divider m='1rem auto' width='80%'/>
        <BuiltWith /> */}
      <Flex display={['flex', 'none']}>{socialLinks}</Flex>
    </Box>
  );
};

export default Footer;
