import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Meta from '@/components/Meta';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/ui/toast';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div
        className={cn(
          'min-h-screen bg-slate-50 dark:bg-slate-900 antialiased flex flex-col h-5/6 pt-32 max-w-4xl w-full mx-auto container',
          inter.className
        )}
      >
          <Navbar />
          <Toaster position='bottom-right' />
          <main>{children}</main>
          <Footer />
      </div>
    </>
  );
};

export default Layout;
