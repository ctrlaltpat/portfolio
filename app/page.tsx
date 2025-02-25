// import Polyline from '@/components/ui/polyline';
import { TechExp } from '@/components/ui/techExp';
import type { Metadata } from 'next';
// import Image from 'next/image';
// import styles from './styles/page.module.css';
// import { cx } from '@/utils/styles';

export const metadata: Metadata = {
  title: "CtrlAltPat",
  description: "Portfolio",
};

export default function Home() {
  return (
    <div className={""}>
      {/* <Polyline/> */}
      <TechExp/>
      
    </div>
  );
}
