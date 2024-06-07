'use server';

import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { apiFetch, newApiFetch } from '@/lib/Fetcher';
import { delay } from '@/lib/Promise/Delay';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

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

  await delay(1000);

  return redirect('/daftar/travel/verification');
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

export async function getTravelState() {
  const session = await getServerSession(AuthOptions);
  const res = await apiFetch('/api/travel', session?.user.tokenApi ?? '');
  const result = await res.json();
  if (!res.ok || res.status !== 200) return false;
  return result.data;
}

export async function reRegisterTravel() {
  const session = await getServerSession(AuthOptions);
  const res = await apiFetch('/api/travel/verification/cancel', session?.user.tokenApi ?? '', 'POST');
  if (!res.ok || res.status !== 200) return false;

  return redirect('/daftar/travel');
}

export async function toDashboard() {
  const session = await getServerSession(AuthOptions);

  return redirect(`/${session?.user.role}/dashboard`);
}

export async function travelVerified() {
  const session = await getServerSession(AuthOptions);

  const res = await newApiFetch({
    url: '/api/travel/verification/verified',
    token: session?.user.tokenApi ?? '',
  });

  const result = await res.json();

  return result.data;
}
