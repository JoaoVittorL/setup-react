import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <ThemeToggle />
        <h1 className="text-3xl text-white">Home</h1>
        <Button variant={'default'} size={'icon'} icon={<Search />} title="Pesquisar" />
      </div>
    </>
  );
}
