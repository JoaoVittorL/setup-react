import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return <div className="flex min-h-screen w-full ">
      <Outlet />
  </div>;
}
