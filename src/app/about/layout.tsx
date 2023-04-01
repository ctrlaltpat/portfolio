import '@/styles/globals.css';
import { FC } from 'react';

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return <section className='pt-20'>{children}</section>;
};

export default RootLayout;
