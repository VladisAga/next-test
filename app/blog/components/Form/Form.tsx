'use client';

import React, { FormEventHandler, useEffect } from 'react';
import { usePosts } from '@/app/store';

const Form = () => {
  const { getAllPostsBySearch, getAllPosts } = usePosts((state) => state);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValue = Object.fromEntries(formData.entries());
    getAllPostsBySearch(formValue.search as string);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
