import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Blog from './pages/Blog';
import PostPage from './pages/Post';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,

      children: [
        {
          path: '',
          element: <About />,
          index: true,
        },
        {
          path: 'blog',
          element: <Blog />,
        },
        {
          path: 'post/:id',
          element: <PostPage />,
        },
      ],
    },
  ],
  {
    basename: '/ArquiteturaFrontEndBlog',
  }
);

export default router;
