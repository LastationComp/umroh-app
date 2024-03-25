'use server';

import { redirect } from 'next/navigation';

export async function auth(formData: FormData) {
  //   localStorage.setItem('authenticated', 'true');

  return redirect('/');
}
