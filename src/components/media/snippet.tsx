import { Box } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Tags from './tags';

const Snippet = ({ snippet }: any) => { //TODO
  return (
    <Box
      position={'relative'}
      textShadow={'#000000a6 2px 2px 2px'}
      fontSize={'.8rem'}
      borderRadius={'8px'}
      sx={{
        breakInside: 'avoid',
        '& code': {
          overflow: 'scroll',
          padding: '.4rem!important',
        },
        '& pre': {
          margin: '0!important',
          padding: '.4rem!important',
          paddingBottom: '2rem!important',
        },
      }}
    >
      <Box
        position={'relative'}
        minHeight={'24px'}
        width={'100%'}
        borderRadius={'8px 8px 0 0'}
        paddingTop={'2px'}
        paddingLeft={'86px'}
        background={'black'}
        color={'gray.600'}
        fontWeight={'bold'}
        letterSpacing={'wide'}
      >
        <Box
          position={'absolute'}
          display={'flex'}
          top={'.4rem'}
          left={'1rem'}
          width={'100%'}
          sx={{
            '& .control': {
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              marginRight: '8px',
            },
          }}
        >
          <Box className='control' backgroundColor={'#ab58df'}></Box>
          <Box className='control' backgroundColor={'#3cd6ee'}></Box>
          <Box className='control' backgroundColor={'brand.primary'}></Box>
        </Box>
        <Box>{snippet.fields.title}</Box>
      </Box>
      <SyntaxHighlighter language={snippet.fields.language} style={nightOwl}>
        {snippet.fields.content}
      </SyntaxHighlighter>
      <Tags tags={snippet.fields.tags} />
    </Box>
  );
};

export default Snippet;
