import {
  Center,
  Flex,
  Icon,
  LinkBox,
  LinkOverlay,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaCodepen } from 'react-icons/fa';
import { GrGithub, GrLinkedin, GrTwitter } from 'react-icons/gr';
import { SOCIAL_LINKS } from 'src/constants';

const { CODEPEN, GITHUB, LINKEDIN, TWITTER } = SOCIAL_LINKS;

const SOCIALS = [
  {
    name: 'CodePen',
    link: CODEPEN,
    icon: FaCodepen,
  },
  {
    name: 'Github',
    link: GITHUB,
    icon: GrGithub,
  },
  {
    name: 'LinkedIn',
    link: LINKEDIN,
    icon: GrLinkedin,
  },
  {
    name: 'Twitter',
    link: TWITTER,
    icon: GrTwitter,
  },
];

export const socialLinks = SOCIALS.map(({ link, icon, name }) => (
  <LinkBox
    m={2}
    flex={1}
    key={name}
    transition={'all .8s cubic-bezier(.175,.885,.32,1.275)'}
    _hover={{ transform: 'rotateY(360deg)' }}
  >
    <Center w='100%' h={[6, 6, 10]}>
      <Icon color={'brand.primary'} as={icon} w={[6, 6, 8]} h={[6, 6, 8]} />
      <LinkOverlay href={link} isExternal></LinkOverlay>
      <VisuallyHidden>{name}</VisuallyHidden>
    </Center>
  </LinkBox>
));

export default function Socials() {
  return (
    <Flex
      w='100%'
      justify={'center'}
      flexWrap={'wrap'}
      flexDirection={'column'}
      filter={'grayscale(100%) opacity(0.7)'}
      transition={'600ms'}
      _hover={{
        filter: 'grayscale(0%) opacity(1)',
        bg: 'brand.bg1',
        color: 'brand.font1',
        boxShadow: '2px 2px 5px #2b6cb040, -1px -1px 5px #2b6cb040',
      }}
      _groupHover={{
        flexDirection: 'row',
        h: '4.5rem',
        alignContent: 'center',
      }}
    >
      {socialLinks}
    </Flex>
  );
}
