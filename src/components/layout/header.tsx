import Head from 'next/head';
import { useRouter } from 'next/router';
import { SITE_NAME } from '../../constants';
import NavBar from './navBar';

const Header = () => {
  const { pathname } = useRouter();
  const pageName = pathname[1]
    ? `${SITE_NAME} - ${pathname[1].toUpperCase()}${pathname
        .substring(2)
        .replace('/[slug]', '')}`
    : SITE_NAME;

  return (
    <>
      <Head>
        <title>{pageName}</title>
        <meta name={SITE_NAME} content='A developer portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
