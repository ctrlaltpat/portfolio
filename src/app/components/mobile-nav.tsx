'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCode,
  HiOutlineNewspaper,
  HiOutlinePhotograph,
} from 'react-icons/hi';

const links = [
  { href: '/', label: 'Home', icon: HiOutlineHome },
  { href: '/about', label: 'About', icon: HiOutlineUser },
  { href: '/projects', label: 'Projects', icon: HiOutlineCode },
  { href: '/blog', label: 'Blog', icon: HiOutlineNewspaper },
  { href: '/media', label: 'Media', icon: HiOutlinePhotograph },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass-panel mx-4 mb-4 rounded-2xl">
        <div className="flex justify-around p-2">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center p-2 rounded-xl transition-colors ${
                  isActive
                    ? 'text-[#0066ff]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs mt-1">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
