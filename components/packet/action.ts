'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function Compare(urlRedirect?: string) {
  const cookiesStorage = cookies();
  const authenticated = cookiesStorage.get('auth');

  if (!cookiesStorage.has('auth') || authenticated?.value !== 'true') return redirect('/masuk' + (!urlRedirect ? '' : '?redirect=' + urlRedirect));

  return true;
}
