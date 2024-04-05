'use server';

import { delay } from '@/lib/Promise/Delay';

export async function getPaketUmroh(page: number, perpage: number = 3, query: string = '') {
  await delay(1000);
  const res = await fetch(`https://umroh-ai-dummy-api-production.up.railway.app/paket_umroh?_start=${page * perpage - perpage}&_limit=${perpage * page}`, { cache: 'no-store' });
  return res.json();
}
