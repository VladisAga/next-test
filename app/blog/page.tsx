import { Metadata } from 'next';
import Link from 'next/link';

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

export const metadata: Metadata = {
  title: 'Жопа горит у сереги ночью',
};

const Blog = async () => {
  const blog = await getData();

  return (
    <>
      <h1>🔥Жопа горит у сереги ночью🔥</h1>
      <ul>
        {blog.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
