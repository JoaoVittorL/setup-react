import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  const [tabTitle, setTabTitle] = useState('');

  useEffect(() => {
    setTabTitle(document.title);

    const handleTitleChange = () => setTabTitle(document.title);

    const observer = new MutationObserver(handleTitleChange);
    observer.observe(document.querySelector('title')!, { childList: true });
    return () => observer.disconnect();
  }, []);
  

  return <div className="flex min-h-screen w-full bg-slate-950">
      <span className="sr-only text-center">{tabTitle}</span>
      <Outlet />
  </div>;
}
