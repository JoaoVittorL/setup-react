import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '../layouts/app';
import { Home } from '../../pages/index';
import { ProductsPage } from '@/features/product';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/product',
        element: <ProductsPage />,
      },
    ],
  },
]);
