import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CtrlAltPat',
  description: 'Just a portfolio',
};

export default function Home() {
  return (
    <div className='relative flex items-center justify-center overflow-x-hidden'>
      {/* h-screen */}
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading size='sm' className='three-d tracking-normal'>
            Hello, I&apos;m
          </LargeHeading>

          <h1 className='text-5xl gradient-text'>
            Patrick.
          </h1>

          <Paragraph className='max-w-xl lg:text-left'>
            {/* &#128376;  */}
            &#128187; Web Developer
            <br />
            &#127468;&#127463; London-based
            <br />
            &#127918; Gamer
            <br />
            &#128764; Skater
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
