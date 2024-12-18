'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { HiHome, HiUser, HiCode, HiNewspaper, HiPhotograph } from 'react-icons/hi';

const navItems = [
  { href: '/', label: 'Home', icon: HiHome },
  { href: '/projects', label: 'Projects', icon: HiCode },
  { href: '/blog', label: 'Blog', icon: HiNewspaper },
  { href: '/media', label: 'Media', icon: HiPhotograph },
  { href: '/about', label: 'About', icon: HiUser },
] as const;

function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="navigation hidden md:flex">
        <ul className="flex space-x-2">
          {navItems.slice(1).map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link relative ${isActive ? 'text-primary' : 'text-foreground'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-background/80 backdrop-blur-lg border-t border-white/[0.1] z-50">
        <ul className="flex justify-around p-2">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex flex-col items-center p-2 ${
                    isActive ? 'text-primary' : 'text-foreground/60'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs mt-1">{label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="mobile-nav-indicator"
                      className="absolute bottom-0 left-1/2 w-12 h-0.5 bg-primary -translate-x-1/2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
