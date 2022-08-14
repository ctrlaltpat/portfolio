import { Box } from '@chakra-ui/react';

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <Box
      position={'absolute'}
      bottom={'.2rem'}
      left={'.4rem'}
      overflowX={'scroll'}
    >
      {tags.map((t, i) => (
        <Box
          display={'inline-block'}
          key={i}
          color={'brand.text2'}
          borderRadius={'.3rem'}
          padding={'0 4px'}
          marginRight={'6px'}
          height={'20px'}
          textShadow={'#000000a6 2px 2px 2px'}
          fontWeight={'bold'}
          fontSize={'12px'}
          opacity={'.9'}
          letterSpacing={'wider'}
          backgroundColor={'#000'}
        >
          {t}
        </Box>
      ))}
    </Box>
  );
};

export default Tags;
