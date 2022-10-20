import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="bg-blue-300 flex justify-center py-2 items-center">
      <Link className="text-xl" to={`/`}>
        Sobre
      </Link>
      <span className="mx-4 text-xl"> | </span>
      <Link className="text-xl" to={`blog`}>
        Blog
      </Link>
    </div>
  );
};

export default Header;
