'use server';
import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { apiFetch } from '@/lib/Fetcher';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';

export async function handleSubmit(prevState: any, formData: FormData, endpoint: string, tag: string = '') {
  const session = await getServerSession(AuthOptions);
  const res = await apiFetch(endpoint, session?.user.tokenApi ?? '', 'DELETE');
  // console.log(res);

  const result = await res.json();

  if (!res.ok || res.status !== 200)
    return {
      type: 'error',
      success: false,
      message: result.message,
    };

  if (tag) revalidateTag(tag);

  return {
    type: 'success',
    success: true,
    message: result.message,
  };
}
