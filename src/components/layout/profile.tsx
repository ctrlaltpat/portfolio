import {
  Flex,
  Box,
  LinkBox,
  LinkOverlay,
  Divider,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import Image from 'next/image';
import avatar from '../../../public/images/ctrlaltpat-thumbs-up.png';
import nla from '../../../public/images/never-love-anything.gif';

export default function Profile() {
  return (
    <Flex direction={'column'}>
      <Box>
        <LinkBox
          borderRadius={'50%'}
          border={'2px solid #414040'}
          p={2}
          m={4}
          mb={[4, 4, 8]}
          w={'3rem'}
          h={'3rem'}
          transition={'600ms'}
          _hover={{
            backgroundColor: 'brand.bg1',
            borderColor: 'brand.primary',
          }}
          _groupHover={{
            w: '14rem',
            h: '14rem',
          }}
        >
          <Image src={avatar} alt='ctrlaltpat memoji' />
          <LinkOverlay href='/'></LinkOverlay>
        </LinkBox>
      </Box>
      <Box
        display='none'
        textAlign={'center'}
        mb={10}
        _groupHover={{
          display: 'block',
        }}
      >
        <Box>
          <Popover placement='top'>
            <PopoverTrigger>
              <Button
                bgColor='brand.bg1'
                fontSize={24}
                transition={'600ms'}
                _hover={{ color: 'brand.primary', letterSpacing: '2px' }}
              >
                {`< CtrlAltPat />`}
              </Button>
            </PopoverTrigger>
            <PopoverContent w='14rem'>
              <Image src={nla} alt='Never Love Anything.'></Image>
              {
                // change this}
              }
            </PopoverContent>
          </Popover>
        </Box>
        {/* spotifiy, maybe some github stuff */}
      </Box>
      {/* <Divider /> */}
    </Flex>
  );
}
