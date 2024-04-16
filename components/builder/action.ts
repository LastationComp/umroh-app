'use server';

import { delay } from '@/lib/Promise/Delay';

export async function handleSubmit(prevState: any, formData: FormData) {
  await delay(1000);
  const random = Math.floor(Math.random() * 2);

  if (random === 1)
    return {
      type: 'success',
      success: true,
      message: 'Testing Success',
    };
  return {
    type: 'error',
    message: 'Testing Error',
  };
}

export async function getDataApi(apis: any[]) {
  const resultFinal = apis.map(async (api) => {
    const name = api.apiFor;
    const res = await fetch(api.url, { cache: 'no-store',  });
    const result = await res.json();
    return {
      [name]: result,
    };
  });

  return resultFinal;
}
