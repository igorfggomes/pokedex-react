import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, PokeDetails } from './pages';

import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:pokeId',
    element: <PokeDetails />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
