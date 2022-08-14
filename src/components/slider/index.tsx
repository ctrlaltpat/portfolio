import { Box, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FC, useRef, useState } from 'react';
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri';

import Tile, { TileProps } from './tile';

type direction = 'left' | 'right';

const Slider: FC<{ items?: TileProps[] }> = ({ items }) => {
  const itemsPerScreen = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
    xl: 4,
  });
  const [sliderIndex, setSliderIndex] = useState(0);
  const [progressBarIndex, setProgressBarIndex] = useState(0);
  const sliderTrack = useRef(null);

  const Handle: FC<{
    dir: direction;
    progressBarItemCount: number;
    current: number;
  }> = ({ dir, progressBarItemCount, current }) => {
    const handleClick = (dir: direction) => {
      if (current + 1 >= progressBarItemCount && dir === 'right') {
        setSliderIndex(0);
        setProgressBarIndex(0);
      } else if (current === 0 && dir === 'left') {
        setSliderIndex(progressBarItemCount - 1);
        setProgressBarIndex(progressBarItemCount - 1);
      } else {
        const adjustment = dir === 'left' ? 1 : -1;
        setSliderIndex(sliderIndex - adjustment);
        setProgressBarIndex(progressBarIndex - adjustment);
      }
    };

    return (
      <Box
        className='key-button'
        position={'absolute'}
        onClick={() => handleClick(dir)}
        sx={{
          [`${dir}`]: `${dir === 'left' ? '1rem' : '.5rem'}`,
          cursor: 'pointer',
          fontSize: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: '0',
          opacity: '0.6',
        }}
        _hover={{
          opacity: '1',
        }}
      >
        <Icon
          color={'#d1d1dd86'}
          transition={'450ms ease-in-out'}
          scale={'1'}
          _hover={{
            color: 'blue.500',
          }}
          as={dir === 'left' ? RiArrowLeftSFill : RiArrowRightSFill}
        ></Icon>
      </Box>
    );
  };

  const ProgressItem: FC<{ isActive: boolean }> = ({ isActive }) => (
    <Box
      className={isActive ? 'active' : ''}
      flex={'0 0 1.5rem'}
      minWidth={'1.5rem'}
      height={'.5rem'}
      margin={'1rem auto'}
      backgroundColor={'rgba(255, 255, 255, .3)'}
      sx={{
        '&.active': {
          backgroundColor: 'blue.500',
        },
      }}
    ></Box>
  );

  const ProgressBar: FC<{
    itemsPerScreen: number;
    itemCount: number;
    current: number;
  }> = ({ itemsPerScreen, itemCount, current }) => {
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

    return (
      <Box
        align-items={'center'}
        display={'flex'}
        justifyContent={'space-between'}
        m={'1rem'}
        p={'1rem'}
        position={'relative'}
      >
        <Handle
          dir='left'
          progressBarItemCount={progressBarItemCount}
          current={current}
        />
        <Handle
          dir='right'
          progressBarItemCount={progressBarItemCount}
          current={current}
        />
        <Box
          display={'flex'}
          gap={'.25rem'}
          m={'0 auto'}
          position={'relative'}
          top={'-45px'}
        >
          {Array.from(Array(progressBarItemCount)).map((t, i) => (
            <ProgressItem key={i} isActive={i === current} />
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <Box position={'relative'} overflow={'hidden'}>
      <Box pt={'1rem'} pb={'1rem'}>
        <Flex
          ref={sliderTrack}
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
            '--items-per-screen': `${itemsPerScreen}`,
            '--slider-index': `${sliderIndex}`,
            flexGrow: '1',
            margin: '0 var(--img-gap)',
            transform: 'translateX(calc(var(--slider-index) * -100%))',
            transition: 'transform 1s ease-in-out',
          }}
        >
          {items && items.length > 0
            ? items.map((item, idx) => <Tile key={idx} {...item} />)
            : null}
        </Flex>
        <ProgressBar
          itemsPerScreen={itemsPerScreen!}
          itemCount={items!.length}
          current={progressBarIndex}
        />
      </Box>
    </Box>
  );
};

Slider.defaultProps = {
  items: [
    {
      title: 'A title for a thing',
      status: 'WIP',
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut .`,
      tags: ['tag', 'project'],
    },
    {
      title: 'Another title for a thing',
      status: 'WIP',
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut .`,
      tags: ['tag', 'project'],
    },
    {
      title: 'Another title for another thing',
      status: 'WIP',
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut .`,
      tags: ['tag', 'project'],
    },
    {
      title: 'Another title for another thing',
      status: 'WIP',
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut .`,
      tags: ['tag', 'project'],
    },
    {
      title: 'Another title for another thing',
      status: 'WIP',
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut .`,
      tags: ['tag', 'project'],
    },
    {
      title: 'Another title for another thing',
      status: 'WIP',
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut .`,
      tags: ['tag', 'project'],
    },
    {
      title: 'Another title for another thing',
      status: 'WIP',
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut .`,
      tags: ['tag', 'project'],
    },
    {
      title: 'Another title for another thing',
      status: 'WIP',
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut .`,
      tags: ['tag', 'project'],
    },
    {
      title: 'Another title for another thing',
      status: 'WIP',
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut .`,
      tags: ['tag', 'project'],
    },
    {
      title: 'Another title for another thing',
      status: 'WIP',
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut .`,
      tags: ['tag', 'project'],
    },
  ],
};

export default Slider;
