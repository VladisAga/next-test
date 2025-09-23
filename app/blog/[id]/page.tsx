type Props = {
  params: { id: string };
};

export default function Post({ params: { id } }: Props) {
  return <h1>Page post {id}</h1>;
}
