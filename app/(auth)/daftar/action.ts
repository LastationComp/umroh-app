'use server';
import { apiFetch } from '@/lib/Fetcher';

export async function registration(formData: FormData) {
  const csrf = await fetch(process.env.NEXT_PUBLIC_URL_API + '/api/sanctum/csrf-cookie', {
    credentials: 'include',
  });

  const cookies = csrf.headers.getSetCookie();

  let sessionKey;
  let xsrfToken;
  cookies.forEach((cookie: string) => {
    if (cookie.startsWith('XSRF-TOKEN=')) {
      xsrfToken = cookie.split('=')[1];
    }
    if (cookie.startsWith('laravel_session=')) {
      sessionKey = cookie.split('=')[1];
    }
  });

  const headers = new Headers({
    Accept: 'application/json',
  });

  if (sessionKey) {
    headers.append('laravel_session', sessionKey);
  }

  if (xsrfToken) {
    headers.append('X-XSRF-TOKEN', xsrfToken);
  }
  const res = await fetch(process.env.NEXT_PUBLIC_URL_API + '/api/registration/user', {
    method: 'POST',
    cache: 'no-store',
    credentials: 'include',
    headers: headers,
    body: formData,
  });
  const result = await res.json();

  if (!res.ok || res.status !== 200)
    return {
      success: false,
      type: 'error',
      message: result.message,
    };

  return result;
}
