import { extendTheme, theme as base } from '@chakra-ui/react';
import { githubIoBg } from './bg';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        // background: githubIoBg,
        backgroundColor: '#0c0c0f',
        // bgGradient: 'linear(to-tr, #000000, #141515)',
      },
      body: {
        height: '100%',
        scrollbarWidth: 'thin',
        scrollbarColor: '#2b6cb0',
        background: 'transparent',
        color: '#ececec',
      },
    },
  },
  colors: {
    brand: {
      bg1: '#0c0c0f',
      bg2: '#121216',
      bg3: 'rgba(0, 0, 0, 0.637)',
      bgPrimary: githubIoBg,
      navbg: '#101014d2',
      text1: '#ececec',
      text2: '#b6b6b6',
      primary: '#2b6cb0',
    },
  },
  fonts: {
    footer: `Monserrat, ${base.fonts?.heading}`,
  },
});

export default theme;
