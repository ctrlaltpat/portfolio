import { Box, Flex, Icon, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons/lib';
import {
  SiAngularjs,
  SiChakraui,
  SiCsharp,
  SiCss3,
  SiDotnet,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIterm2,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiRuby,
  SiRubyonrails,
  SiSass,
  SiSqlite,
  SiSwift,
  SiTypescript,
  SiUnity,
  SiVisualstudiocode,
  SiWordpress,
} from 'react-icons/si';
import { githubIoBg } from '../../../styles/theme/bg';

const simpleIcons: IconType[] = [
  SiAngularjs,
  SiChakraui,
  SiCsharp,
  SiCss3,
  SiDotnet,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiRubyonrails,
  SiRuby,
  SiSass,
  SiSqlite,
  SiSwift,
  SiIterm2,
  SiTypescript,
  SiUnity,
  SiVisualstudiocode,
  SiWordpress,
];

const rise = keyframes`
  from { transform: translateY(100%) scale(0);}
  to { transform: translateY(-100px) scale(1); }
`;
const rotation = keyframes`
  from { transform: rotate(0deg);}
  to { transform: rotate(359deg);}
`;
const riseAnim = `${rise} 15s linear infinite`;
const rotationAnim = `${rotation} 20s linear infinite`;

const shuffle = (arr: IconType[]) => arr.sort(() => Math.random() - 0.5);

function IconBackground() {
  const icons: IconType[] = shuffle(simpleIcons);
  return (
    <Flex
      zIndex={'-1'}
      position={'absolute'}
      height={'100%'}
      width={'100%'}
      overflow={'hidden'}
      top={'0'}
      left={'0'}
      justifyContent={'space-around'}
      background={githubIoBg}
    >
      {icons.map((icon, idx) => (
        <Box
          key={idx}
          as={motion.div}
          animation={riseAnim}
          display={'inline-block'}
          opacity={'.3'}
          p={'2px'}
          m={'0 4px'}
          sx={{
            animationDuration: `calc(300s/${
              Math.floor(Math.random() * idx) + 10
            })`,
          }}
        >
          <Icon
            as={icon}
            w={[6, 8]}
            h={[6, 8]}
            color={'brand.primary'}
            bgGradient='linear(to-tr, #000000, #141515)'
            borderRadius={'20%'}
            animation={rotationAnim}
          />
        </Box>
      ))}
    </Flex>
  );
}

export default IconBackground;
