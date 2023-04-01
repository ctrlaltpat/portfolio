import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import gif from '../../public/images/404.gif';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CtrlAltPat | Page not found',
  description: 'Hmmm... something went wrong. Sorry!',
};

const PageNotFound: FC = () => {
  return (
    <section className='container pt-32 pb-20 max-w-7xl mx-auto text-center flex flex-col gap-6 items-center'>
      <LargeHeading size='lg'>404</LargeHeading>
      <Paragraph>Page Not Found</Paragraph>
      <div className='img-404'>
        <Image src={gif} alt='404'></Image>
      </div>
      <Paragraph>Hmmm... something went wrong. Sorry!</Paragraph>
      <Link href='/'>
        <div className='key-btn'>Esc</div>
      </Link>
    </section>
  );
};

export default PageNotFound;
