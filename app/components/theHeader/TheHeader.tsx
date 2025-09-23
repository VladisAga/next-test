import React from 'react';
import Link from 'next/link';
import { Header } from '@/app/components/theHeader/theHeader.style';

const TheHeader = () => {
  return (
    <Header>
      <Link href="/">Главная</Link>
      <Link href="/public">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </Header>
  );
};

export default TheHeader;
