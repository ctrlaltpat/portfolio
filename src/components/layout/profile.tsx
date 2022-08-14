import {
  Box,
  Button,
  Flex,
  LinkBox,
  LinkOverlay,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import Image from 'next/image';
import { SOCIAL_LINKS } from 'src/constants';
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
            boxShadow: '2px 2px 5px #2b6cb040, -1px -1px 5px #2b6cb040',
          }}
          _groupHover={{
            w: '14rem',
            h: '14rem',
          }}
        >
          <Image src={avatar} alt='ctrlaltpat memoji' />
          <LinkOverlay href={SOCIAL_LINKS.GITHUB} isExternal></LinkOverlay>
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
                border={'0px solid transparent'}
                fontSize={24}
                transition={'600ms'}
                _hover={{
                  color: 'brand.primary',
                  letterSpacing: '2px',
                  borderWidth: '1px',
                  borderColor: 'brand.primary',
                  boxShadow: '2px 2px 5px #2b6cb040, -1px -1px 5px #2b6cb040',
                }}
              >
                {`< CtrlAltPat />`}
              </Button>
            </PopoverTrigger>
            <PopoverContent w='14rem'>
              <Image src={nla} alt='Never Love Anything.'></Image>
            </PopoverContent>
          </Popover>
        </Box>
        {/* other stuff */}
      </Box>
      {/* <Divider /> */}
    </Flex>
  );
}
