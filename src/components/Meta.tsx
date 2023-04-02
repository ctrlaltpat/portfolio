import Head from 'next/head';
import { useRouter } from 'next/router';

const SITE_NAME = 'CtrlAltPat';

const Meta = () => {
  const { pathname } = useRouter();
  const pageName = pathname[1]
    ? `${SITE_NAME} - ${pathname[1].toUpperCase()}${pathname
        .substring(2)
        .replace('/[slug]', '')}`
    : SITE_NAME;
  return (
    <Head>
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <meta name='theme-color' content='#000' />
      <meta
        name='description'
        content={`A developer portfolio by CtrlAltPat.`}
      />
      <title>{pageName}</title>
      <meta name={SITE_NAME} content='A developer portfolio' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Meta;
