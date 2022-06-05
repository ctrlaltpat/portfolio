import { Flex, List, ListItem } from '@chakra-ui/react';
import { FC } from 'react';
import { PAGES } from '../../constants';
import NavLink, { NavLinkProps } from './navLink';
import Profile from './profile';
import Socials from './socials';

const NavBar: FC<{ links?: NavLinkProps[] }> = ({ links }) => {
  return (
    <Flex
      as='nav'
      role='group'
      pos={'fixed'}
      overflow={'scroll'}
      h={['4.5rem', '100vh']}
      w={['100%', '5rem']}
      bottom={['.5rem', 'auto']}
      top={['auto', 0]}
      transition={'width 600ms ease'}
      zIndex={1}
      _hover={{ w: ['100%', '16rem'] }}
      backdropFilter='auto'
      backdropBlur='2px'
    >
      <List
        bgColor={['brand.bg3', 'brand.navbg']}
        h={'100%'}
        borderRadius={['.5rem', 'none']}
        display={'flex'}
        flexDir={['row', 'column']}
        alignItems={'center'}
        w={['340px', 'auto']}
        padding={'0 .2rem'}
        margin={['0 auto']}
      >
        <ListItem display={['none', 'block']} h={'20rem'}>
          <Profile />
        </ListItem>

        {links && links.length > 0
          ? links.map((link) => <NavLink key={link.title} {...link} />)
          : null}

        <ListItem w='100%' mt={'auto'} display={['none', 'block']}>
          <Socials />
        </ListItem>
      </List>
    </Flex>
  );
};

NavBar.defaultProps = {
  links: PAGES,
};

export default NavBar;
