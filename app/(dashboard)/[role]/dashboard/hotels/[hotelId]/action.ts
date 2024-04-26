'use server';
import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { apiFetch } from '@/lib/Fetcher';
import { getServerSession } from 'next-auth';

export async function getDetailHotel(id: string) {
  const session = await getServerSession(AuthOptions);
  const res = await apiFetch('/api/dashboard/hotels/' + id, session?.user.tokenApi);
  const result = await res.json();

  return result?.message;
}

export async function uploadGallery(id: string, formData: FormData) {
  const session = await getServerSession(AuthOptions);
  const res = await apiFetch('/api/dashboard/hotels/' + id + '/galleries', session?.user.tokenApi, 'POST', formData);
  const result = await res.json();

  return result;
}
