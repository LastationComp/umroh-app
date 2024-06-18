'use client';
import { mutate } from 'swr';

export async function mutateArray(cacheName: string) {
  return await mutate((key) => Array.isArray(key) && key[0] === cacheName);
}
