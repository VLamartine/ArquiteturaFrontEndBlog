import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { Post } from '../interfaces/post.interface';

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
      .then((r) => r.json())
      .then((posts: Post[]) => {
        setPosts(posts.reverse());
      });
  }, []);
  return (
    <div className="w-3/5 m-auto">
      <h1 className="text-center text-2xl font-bold">Minhas publicações</h1>
      <div className="flex flex-col">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
