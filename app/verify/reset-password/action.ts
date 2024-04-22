'use server';

import { apiFetch } from '@/lib/Fetcher';
import { redirect } from 'next/navigation';

export async function sendResetPassword(formData: FormData) {
  const res = await apiFetch('/api/verify/reset-password', '', 'POST', formData);
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

export async function resetPassword(formData: FormData) {
  const res = await apiFetch('/api/verify/reset-password/confirm', '', 'POST', formData);
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

export async function checkHash(hash: string) {
  const res = await apiFetch('/api/verify/reset-password/' + hash);

  if (!res.ok || res.status !== 200) return redirect('/');
}
