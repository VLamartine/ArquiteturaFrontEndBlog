import { useEffect, useState } from 'react';
import { Post } from '../interfaces/post.interface';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';
const About = () => {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
      .then((r) => r.json())
      .then((posts: Post[]) => {
        const fetchedRecentPosts = posts.slice(-5).reverse();

        setRecentPosts(fetchedRecentPosts);
      });
  });

  return (
    <div>
      <header className="bg-blue-300 flex justify-center p-4">
        <div className="flex items-center">
          <img
            className="max-w-[200px] max-h-[200px] rounded-full mr-12"
            src="/avatar.png"
            alt="Avatar"
          />
          <div className="flex flex-col max-w-xs">
            <h2 className="text-purple-700 font-bold text-4xl">Your name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              pariatur sit placeat labore iusto cum recusandae perferendis
              asperiores voluptates, quam suscipit assumenda repudiandae
              quisquam illo impedit ad itaque excepturi rerum. Quos
              voluptatibus, molestias assumenda obcaecati nostrum sequi est qui
              soluta, quaerat at placeat odio consectetur quasi sit explicabo
              aut, harum cumque quo deleniti numquam sunt! Molestiae quas eius
              aliquid iure.
            </p>
          </div>
        </div>
      </header>
      <div className="flex flex-col w-3/5 m-auto pt-5">
        <h1 className="text-center font-extrabold text-xl">
          Últimas publicações:
        </h1>
        {recentPosts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
        <Link to="/blog" className="text-blue-700">
          Ver todas
        </Link>
      </div>
    </div>
  );
};

export default About;
