import React from 'react';
// import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { buttonVariants } from '@/ui/Button/Button';
// import SignInButton from '@/ui/Button/SignInButton';
// import SignOutButton from '@/ui/Button/SignOutButton';
// import { authOptions } from '@/lib/auth';

const Navbar = () => {
  // const session = await getServerSession(authOptions);

  return (
    <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 shadow-sm flex items-center justify-between'>
      <div className='container max-w-4xl mx-auto w-full flex justify-between items-center'>
        <Link href='/'>
          <div className="key-btn">Ctrl</div>
          <div className="key-btn">Alt</div>
          <div className="key-btn">Pat</div>
        </Link>

        <div className='md:hidden'>
          <ThemeToggle />
        </div>

        <div className='hidden md:flex gap-4'>
          <ThemeToggle />
          <Link
            href='/about'
            className={buttonVariants({ variant: 'ghost' })}>
            About
          </Link>
          <Link
            href='/posts'
            className={buttonVariants({ variant: 'ghost' })}>
            Blog
          </Link>
          <Link
            href='/projects'
            className={buttonVariants({ variant: 'ghost' })}>
            Projects
          </Link>
          <Link
            href='/media'
            className={buttonVariants({ variant: 'ghost' })}>
            Media
          </Link>
          {/* {session ? (
            <>
              <Link
                className={buttonVariants({ variant: 'ghost' })}
                href='/dashboard'
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
