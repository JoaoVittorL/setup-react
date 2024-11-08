import './style/index.css';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';
import { ThemeProvider } from './components/theme/theme-provider';
export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="app-theme" defaultTheme="system">
        <QueryClientProvider client={queryClient}>
          <Helmet titleTemplate="%s - App" />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
