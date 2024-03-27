'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function auth(formData: FormData) {
  //   localStorage.setItem('authenticated', 'true');
  cookies().set('auth', 'true');
  return redirect('/');
}
