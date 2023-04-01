import { FC } from 'react';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toast';

const inter = Inter({ subsets: ['latin'] });

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html
      lang='en'
      className={cn('bg-white text-slate-900 antialiased', inter.className)}
    >
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar/>
          <Toaster position='top-right' />

          <main>{children}</main>
        </Providers>

        {/* <div className='h-40 md:hidden' /> */}
      </body>
    </html>
  );
};

export default RootLayout;
