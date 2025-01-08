import './shared/styles/index.css';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import { router } from './shared/routes/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './shared/lib/react-query';
import { ThemeProvider } from './shared/components/theme/theme-provider';
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
