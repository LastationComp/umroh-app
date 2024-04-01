'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function auth(url: string) {
  //   localStorage.setItem('authenticated', 'true');
  cookies().set('auth', 'true');
  if (!url) return redirect('/');

  return redirect(`${url}`);
}
