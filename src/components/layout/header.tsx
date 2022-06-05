import Head from 'next/head';
import NavBar from './navBar';

const Header = () => {
  return (
    <>
      <Head>
        <title>CtrlAltPat</title>
        <meta
          name='CtrlAltPat'
          content='Why am I bothering to do any of this?... I wish I never existed'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
