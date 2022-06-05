import { Box, ContainerProps } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, type: 'easeIn' },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, type: 'easeOut' },
  },
};

type PageProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

const MotionContainer = motion<ContainerProps>(Box);

const PageWrapper = ({ title, children }: PageProps) => {
  return (
    <MotionContainer
      w={'100%'}
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
    >
      <h1>{title}</h1>
      {children}
    </MotionContainer>
  );
};

export default PageWrapper;
