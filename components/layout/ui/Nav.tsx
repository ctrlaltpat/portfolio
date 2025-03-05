"use client";

import { TransitionLink } from "@/components/ui/transitionLink";
import { usePathname } from "next/navigation";
import {
  HiOutlineCode,
  HiOutlineUser,
  HiOutlineNewspaper,
  HiOutlinePhotograph,
} from "react-icons/hi";

const links = [
  { href: "/projects", label: "Projects", icon: HiOutlineCode },
  { href: "/blog", label: "Blog", icon: HiOutlineNewspaper },
  { href: "/media", label: "Media", icon: HiOutlinePhotograph },
  { href: "/about", label: "About", icon: HiOutlineUser },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      {links.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <TransitionLink
            key={href}
            href={href}
            {...{ className: `cap-btn ${isActive ? "active" : ""}` }}
          >
            <Icon />
            <span>{label}</span>
          </TransitionLink>
        );
      })}
    </nav>
  );
}
