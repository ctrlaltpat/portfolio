'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const linkClass = `inline-block mx-4`;

function Navigation() {
  const pathname = usePathname();
  const highlight = (location: string): string => pathname.startsWith(location) ? 'font-bold': '';
  return (
    <nav className=''>
      <ul className='list-none'>
        <li className={linkClass}>
          <Link
            className={highlight('/projects')}
            href='/projects'
          >
            Projects
          </Link>
        </li>
        <li className={linkClass}>
          <Link className={highlight('/blog')} href='/blog'>Blog</Link>
        </li>
        <li className={linkClass}>
          <Link className={highlight('/media')} href='/media'>Media</Link>
        </li>
        <li className={linkClass}>
          <Link className={highlight('/about')} href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
