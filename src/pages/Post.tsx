import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../interfaces/post.interface';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((post: Post) => setPost(post));
  }, [id]);

  if (!post) {
    return <h1 className="text-center text-blue-500 text-xl">Carregando...</h1>;
  }
  return (
    <div className="w-2/5 m-auto">
      <h1 className="text-center font-bold text-3xl my-4">{post.title}</h1>
      <p className="text-justify">{post.body}</p>
    </div>
  );
};

export default PostPage;
