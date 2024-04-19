'use server';

import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { apiFetch } from '@/lib/Fetcher';
import { getServerSession } from 'next-auth';

export async function updateAccount(formData: FormData) {
  const session = await getServerSession(AuthOptions);
  const image = formData.get('image') as File;
  if (image.size === 0) formData.delete('image');

  const res = await apiFetch('/api/profile/account', session?.user.tokenApi ?? '', 'POST', formData);

  const result = await res.json();
  if (!res.ok || res.status !== 200)
    return {
      type: 'error',
      message: result.message,
    };


  return result;
}
