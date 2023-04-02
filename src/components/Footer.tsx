import Paragraph from '@/ui/Paragraph';
import { FaCodepen } from 'react-icons/fa';
import { GrGithub, GrLinkedin, GrTwitter } from 'react-icons/gr';

const Footer = () => {
  const linkClass =
    'text-slate-400 inline-block my-2 mr-4 text-xl hover:text-blue-400 ease-in-out duration-150';
  return (
    <div className='mx-auto max-w-7xl w-full p-5 mt-auto text-left'>
      <Paragraph className='text-left'>
        CtrlAltPat © 2023
        <br />
        <a
          className={linkClass}
          href='https://github.com/ctrlaltpat'
          target='_blank'
        >
          <GrGithub />
        </a>
        <a
          className={linkClass}
          href='https://www.linkedin.com/in/patrickcpilgrim/'
          target='_blank'
        >
          <GrLinkedin />
        </a>
        <a
          className={linkClass}
          href='https://www.twitter.com/ctrlaltpat'
          target='_blank'
        >
          <GrTwitter />
        </a>
        <a
          className={linkClass}
          href='https://codepen.io/ctrlaltpat'
          target='_blank'
        >
          <FaCodepen />
        </a>
      </Paragraph>
    </div>
  );
};

export default Footer;
