'use server';
import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { apiFetch } from '@/lib/Fetcher';
import { getServerSession } from 'next-auth';

export async function updateProfile(formData: FormData) {
  const session = await getServerSession(AuthOptions);
  const token = session?.user.tokenApi ?? '';

  const res = await apiFetch('/api/profile', token, 'POST', formData);
  const res2 = await apiFetch('/api/profile/complete', token);
  const result = await res.json();

  if (!res.ok || res.status !== 200 || !res2.ok)
    return {
      type: 'error',
      message: result.message,
    };

  return {
    type: 'success',
    message: result.message,
  };
}
export async function createPassword(formData: FormData, token: string) {
  const res = await apiFetch('/api/oauth/create-password', token, 'POST', formData);
  const result = await res.json();

  if (!res.ok || res.status !== 200)
    return {
      type: 'error',
      message: result.message,
    };

  return {
    type: 'success',
    message: result.message,
  };
}
