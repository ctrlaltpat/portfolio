import { Box, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
// import Head from 'next/head'
// import Image from 'next/image'

const KeyButton = (text: string) => (
  <button className='key-button'>{text}</button>
);

const Home: NextPage = () => {
  return (
    <div className={'hello'}>
      <Box>
        {KeyButton('Ctrl')}
        {KeyButton('Alt')}
        {KeyButton('Pat')}
      </Box>
    </div>
  );
};

export default Home;
