'use server';
import { cookies } from 'next/headers';

export async function Logout(formData: FormData) {
  const cookiesStorage = cookies();
  cookiesStorage.delete('auth');
}
