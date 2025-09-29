import React from 'react';
import { Header } from '@/app/components/theHeader/theHeader.style';
import Navigation from '@/app/components/navigation/Navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

const TheHeader = () => {
  return (
    <Header>
      <Navigation navLinks={navItems} />
    </Header>
  );
};

export default TheHeader;
