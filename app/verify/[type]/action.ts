'use server';
import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { apiFetch } from '@/lib/Fetcher';
import { getServerSession } from 'next-auth';
import { Result } from 'postcss';

export async function sendVerificationNotification(type: string) {
  const session = await getServerSession(AuthOptions);
  if (type === 'email') {
    const res = await apiFetch('/api/verify/email', session?.user.tokenApi ?? '');
    const result = await res.json();

    if (!res.ok || res.status !== 200)
      return {
        type: 'error',
        message: result.message,
      };

    return {
      type: 'success',
      message: result.message,
      hash: result.data.hash,
    };
  }
}

export async function verify(formData: FormData, type: string) {
  const session = await getServerSession(AuthOptions);
  if (type === 'email') {
    const res = await apiFetch('/api/verify/email', session?.user.tokenApi ?? '', 'POST', formData);
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
}
