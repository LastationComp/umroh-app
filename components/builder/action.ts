'use server';

import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { apiFetch } from '@/lib/Fetcher';
import { delay } from '@/lib/Promise/Delay';
import { getServerSession } from 'next-auth';

export async function handleSubmit(prevState: any, formData: FormData, endpoint: any) {
  const session = await getServerSession(AuthOptions);
  await delay(1000);

  const res = await apiFetch(endpoint ?? '', session?.user.tokenApi ?? '', 'POST', formData);
  const random = Math.floor(Math.random() * 2);

  const result = await res.json();

  if (!res.ok || res.status !== 200)
    return {
      type: 'error',
      message: result?.message,
    };

  return {
    type: 'success',
    success: true,
    message: result?.message,
  };
}


export async function getDataApi(apis: any[]) {
  const resultFinal = apis.map(async (api) => {
    const name = api.apiFor;
    const res = await fetch(api.url, { cache: 'no-store' });
    const result = await res.json();
    return {
      [name]: result,
    };
  });

  return resultFinal;
}
