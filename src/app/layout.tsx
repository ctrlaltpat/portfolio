import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Nav from './components/navigation';
import Footer from './components/footer';
import './styles/globals.css';
import Sidebar from './components/sidebar';
import Link from 'next/link';

const mainFont = localFont({
  src: './fonts/JosefinSans-VariableFont_wght.ttf',
});

export const metadata: Metadata = {
  title: 'CtrlAltPat',
  description: 'Portfolio?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={`${mainFont.className} min-h-screen p-2`}>
        <header className=''>
          <Link className='ctrlaltpat' href='/'>
            <div className='key-btn'>Ctrl</div>
            <div className='key-btn'>Alt</div>
            <div className='key-btn'>Pat</div>
          </Link>
          <Nav />
        </header>
        <div className='debug-me my-4'>
          <main className='border-blue-700 border-2 my-10 mx-2'>{children}</main>
          <Sidebar />
        </div>
        <Footer />
      </body>
    </html>
  );
}
