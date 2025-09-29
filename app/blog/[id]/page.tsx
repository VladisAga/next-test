import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

const getData = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params;
  return { title: id };
};

export default async function Post({ params }: Props) {
  const { id } = await params;
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
