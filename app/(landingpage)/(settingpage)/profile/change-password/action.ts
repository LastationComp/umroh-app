'use server';
import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { apiFetch } from '@/lib/Fetcher';
import { getServerSession } from 'next-auth';

export async function changePassword(formData: FormData) {
  const session = await getServerSession(AuthOptions);
  const res = await apiFetch('/api/profile/change-password', session?.user.tokenApi ?? '', 'POST', formData);
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
