'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathName = usePathname();
  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          style={pathName === link.href ? { color: 'lightblue' } : {}}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Navigation;
