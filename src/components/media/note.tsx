import { randomNumberBetween } from '@/utils/index';
import { Box, Text } from '@chakra-ui/react';

const Note = ({ note }: any) => { //TODO
  return (
    <Box padding={'10px'}>
      <Box
        position={'relative'}
        minHeight={'250px'}
        backgroundColor={'brand.primary'}
        padding={'20px'}
        transform={`rotate(${randomNumberBetween(3, -3)}deg)`}
        sx={{ breakInside: 'avoid' }}
      >
        <Box
          borderRadius={'8px'}
          textShadow={'#232323a6 1px 1px 1px'}
          color={'black'}
          fontFamily={'Gochi Hand'}
        >
          <Text fontSize={'1.4rem'} fontWeight={500}>
            {note.fields.title}
          </Text>
          <Text marginTop={'10px'} whiteSpace={'pre-line'}>
            {`${note.fields.content}`}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Note;
