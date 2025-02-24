// import Polyline from '@/components/ui/polyline';
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
      
      <div className={""}>
        {/* <Suspense fallback={<>Loading...</>}>
        <video className={styles.bgvideo} autoPlay loop muted preload='none'>
          <source
            src='https://strapi.apps.ctrlaltpat.com/uploads/1000053636_4089bad12d.MP4'
            type='video/mp4'
          />
        </video>
      </Suspense> */}
        <div className={""}>
          {/* <Image
            className={styles.profile}
            src='https://avatars.githubusercontent.com/u/10384309?v=4'
            alt='Next.js logo'
            width={256}
            height={256}
            priority
          /> */}
          {/* <div className={styles.summary}>
            <h2>Software Engineer • Roller Skater • British-Bajan</h2>
            <p>London, UK</p>
            <br />
            {intro.map(p => <p key={p.substring(0,3)}>{p}</p>)}
          </div> */}
        </div>
      </div>
        {/* <h2>Experience</h2>
        {
          experience.map(({title, company, tenure, description, achievements}) => <div key={company.substring(0,3)}>
            <h3>{title} - {company} ({tenure})</h3>
            <h4>{description}</h4>
            <ul>
              {achievements.map((a,i) => <li key={a.substring(0,3)+i}>{a}</li>)}
            </ul>
          </div>)
        } */}
    </div>
  );
}
