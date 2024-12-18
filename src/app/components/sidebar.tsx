'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { KeyboardKeys } from './keyboard-keys';
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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen sticky top-0 p-4 bg-black">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <Link href="/" className="block mb-4">
            <KeyboardKeys />
          </Link>
        </div>

        <nav className="space-y-2">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-8">
          <div className="text-sm text-white/40">
            <p> 2023 Patrick Tsoi</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
