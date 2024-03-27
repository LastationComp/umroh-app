'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import nProgress from 'nprogress';

export async function Order(formData: FormData) {
  const cookiesStorage = cookies();
  const authenticated = cookiesStorage.get('auth');
  if (cookiesStorage.has('auth') && authenticated?.value === 'true') return redirect('/order/unique-paket');

  return redirect('/masuk');
}

export async function FavoritePacket() {
  const cookiesStorage = cookies();
  const authenticated = cookiesStorage.get('auth');
  if (!cookiesStorage.has('auth') || authenticated?.value !== 'true') return redirect('/masuk');

  return true;
}
