'use server';
import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';

export async function Logout(formData: FormData) {
  const session = await getServerSession(AuthOptions);

  const res = await fetch(process.env.NEXT_PUBLIC_URL_API + '/api/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + session?.user.tokenApi,
    },
  });

  if (!res.ok || res.status !== 200) return false;

  return true;
  const cookiesStorage = cookies();
  cookiesStorage.delete('auth');
}
