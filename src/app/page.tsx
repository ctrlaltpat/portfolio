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
          <LargeHeading size='lg' className='three-d tracking-normal'>
            CtrlAltPat
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
            {/* &#128376;  */}
            &#128187; Web Developer
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
