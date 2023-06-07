import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, PokeDetails } from './pages';

import './index.scss';
import PokemonProvider from './context/PokemonContext';

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
  return (
    <PokemonProvider>
      <RouterProvider router={router} />;
    </PokemonProvider>
  );
};
