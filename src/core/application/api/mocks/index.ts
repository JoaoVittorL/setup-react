import { env } from '@/env';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker();

export async function enableMSW() {
  if (env.MODE === 'production') {
    return;
  }

  await worker.start();
}