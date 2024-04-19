'use server';
import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export async function Compare(urlRedirect?: string) {
  const session = await getServerSession(AuthOptions);

  if (!session) return redirect('/masuk' + (!urlRedirect ? '' : '?redirect=' + urlRedirect));

  return true;
}
