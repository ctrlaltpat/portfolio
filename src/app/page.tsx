import Image from 'next/image';
import styles from './page.module.css';
import { Suspense } from 'react';
import { experience, intro, socials } from './content';
import { FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';
import Link from 'next/link';

const cx = (...classNames: string[]) => classNames.join(' ');

const { github, linkedin, codepen } = socials;
const iconSize = 24;

export default function Home() {
  return (
    <div className={styles.page}>
      <Suspense>
        <video className={styles.bgvideo} autoPlay loop muted preload='none'>
          <source
            src='https://strapi.apps.ctrlaltpat.com/uploads/1000053636_4089bad12d.MP4'
            type='video/mp4'
          />
        </video>
      </Suspense>
      <header className={styles.header}>
        <h1>{`<CtrlAltPat/>`}</h1>
        <Link className='ctrlaltpat' href='/'>
          <div className={styles.capBtn}>Ctrl</div>
          <div className={styles.capBtn}>Alt</div>
          <div className={styles.capBtn}>Pat</div>
        </Link>
        {/* <nav>-</nav> */}
      </header>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <Image
            className={styles.profile}
            src='https://avatars.githubusercontent.com/u/10384309?v=4'
            alt='Next.js logo'
            width={256}
            height={256}
            priority
          />
          <div className={styles.summary}>
            <h2>Software Engineer • Roller Skater • British-Bajan</h2>
            <p>London, UK</p>
            <br />
            {intro.map(p => <p key={p.substring(0,3)}>{p}</p>)}
          </div>
        </div>
      </div>
      <main className={cx(styles.main, styles.wrapper)}>
        <h2>Experience</h2>
        {
          experience.map(({title, company, tenure, description, achievements}) => <div>
            <h3>{title} - {company} ({tenure})</h3>
            <h4>{description}</h4>
            <ul>
              {achievements.map((a,i) => <li key={a.substring(0,3)+i}>{a}</li>)}
            </ul>
          </div>)
        }
      </main>
      <footer className={styles.footer}>
        <ul>
          <li>
            <a href={github} target='_blank' title='Github'>
              <FaGithub size={iconSize}/>
            </a>
          </li>
          <li>
            <a href={codepen} target='_blank' title='CodePen'>
              <FaCodepen size={iconSize}/>
            </a>
          </li>
          <li>
            <a href={linkedin} target='_blank' title='Linkedin'>
              <FaLinkedin size={iconSize}/>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
