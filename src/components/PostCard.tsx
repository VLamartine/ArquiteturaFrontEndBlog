import { Post } from '../interfaces/post.interface';
import { Link } from 'react-router-dom';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link
      to={`/post/${post.id}`}
      className="border p-4 my-4 w-full m-auto rounded-2xl border-blue-700 cursor-pointer"
    >
      <h4 className="font-bold">{post.title}</h4>
      <p>{post.body}</p>
    </Link>
  );
};

export default PostCard;
