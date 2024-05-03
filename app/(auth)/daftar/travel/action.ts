'use server';

import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { apiFetch } from '@/lib/Fetcher';
import { getServerSession } from 'next-auth';

export async function createTravel(formData: FormData) {
  const session = await getServerSession(AuthOptions);
  const logo = formData.get('logo') as File;
  if (logo.size === 0) formData.delete('logo');
  const res = await apiFetch('/api/travel', session?.user.tokenApi ?? '', 'POST', formData);
  const result = await res.json();

  if (!res.ok || res.status !== 200) return result;

  if (!result?.message)
    return {
      success: false,
      type: 'error',
      message: result,
    };

  return result;
}

export async function checkTravel() {
  const session = await getServerSession(AuthOptions);
  const res = await apiFetch('/api/travel/verification/check', session?.user.tokenApi ?? '');

  if (!res.ok || res.status !== 200) return false;

  return true;
}

export async function cancelTravel() {
  const session = await getServerSession(AuthOptions);
  const res = await apiFetch('/api/travel/verification/cancel', session?.user.tokenApi ?? '', 'POST');
  const result = await res.json();
  if (!res.ok || res.status !== 200) return false;

  return true;
}
