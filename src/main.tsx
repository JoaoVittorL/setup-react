import { createRoot } from 'react-dom/client';

import { App } from './App';
import { enableMSW } from './api/mocks';

enableMSW().then(() => {
  createRoot(document.getElementById('root')!).render(<App />);
});
