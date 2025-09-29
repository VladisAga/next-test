'use client';

import React from 'react';
import Link from 'next/link';
import { usePosts } from '@/app/store';

const Posts = () => {
  const { posts, loading } = usePosts((state) => state);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {posts.map((post: { title: string; id: string }) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
