'use server';
import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function Order(formData: FormData) {
  const cookiesStorage = cookies();
  const authenticated = cookiesStorage.get('auth');
  if (cookiesStorage.has('auth') && authenticated?.value === 'true') return redirect('/order/unique-paket');

  return redirect('/masuk');
}

export async function FavoritePacket() {
  const session = await getServerSession(AuthOptions);

  if (!session) return redirect('/masuk');

  return true;
}
