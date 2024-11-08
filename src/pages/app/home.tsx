import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Helmet } from 'react-helmet-async';

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <ThemeToggle />
        <h1 className="text-3xl text-white">Home</h1>
      </div>
    </>
  );
}
