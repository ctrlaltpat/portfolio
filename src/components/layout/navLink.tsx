import { Flex, Icon, LinkOverlay, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import {
  GiHelp,
  GiHouse,
  GiNewspaper,
  GiOpenFolder,
  GiSuspicious,
} from 'react-icons/gi';
import { RiOpenSourceFill } from 'react-icons/ri';

export interface NavLinkProps {
  link: string;
  title: string;
}

const NavLink: FC<NavLinkProps> = ({ link, title }) => {
  const router = useRouter();

  const currentPageClass =
    router.pathname === `/${title.toLowerCase()}` ? 'current' : '';

  return (
    <ListItem w={'100%'} className={currentPageClass}>
      <Flex
        h={'4rem'}
        alignItems={'center'}
        color={'brand.text2'}
        textDecoration={'none'}
        filter={'grayscale(100%) opacity(0.7)'}
        transition={'600ms'}
        borderRadius={['.5rem', 'none']}
        position='relative'
        _hover={{
          filter: 'grayscale(0%) opacity(1)',
          bg: 'brand.bg1',
          color: 'brand.primary',
          fontWeight: '500',
        }}
        sx={{
          '.current &': {
            filter: 'grayscale(0%) opacity(1)',
          },
        }}
      >
        <Icon
          as={getIconType(title)}
          w={'2rem'}
          h={'2rem'}
          m={['0 1rem', '0 1.5rem']}
          color='blue.500'
          _groupHover={{
            position: 'relative',
            top: ['.8rem', 'unset'],
          }}
        />
        <NextLink href={link} passHref>
          <LinkOverlay
            display={'none'}
            ml={'1rem'}
            _groupHover={{
              display: ['inline-block', 'inline'],
              position: ['absolute', 'unset'],
              top: ['.6rem', 'unset'],
              width: ['100%', 'unset'],
              height: ['100%', 'unset'],
              margin: ['0 auto', '0 0 0 1rem'],
              textAlign: ['center', 'unset'],
              fontSize: ['.75rem', 'revert'],
            }}
          >
            {title}
          </LinkOverlay>
        </NextLink>
      </Flex>
    </ListItem>
  );
};

const getIconType = (iconName: string) => {
  switch (iconName.toLocaleLowerCase()) {
    case 'home':
      return GiHouse;
    case 'blog':
      return GiNewspaper;
    case 'projects':
      return GiOpenFolder;
    case 'media':
      return RiOpenSourceFill;
    case 'about':
      return GiSuspicious;
    default:
      return GiHelp;
  }
};

export default NavLink;
