import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, PokeDetail } from './pages';

import './index.scss';
import PokemonProvider from './context/PokemonContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:pokeId',
    element: <PokeDetail />,
  },
]);

export const AppRoutes = () => {
  return (
    <PokemonProvider>
      <RouterProvider router={router} />;
    </PokemonProvider>
  );
};
