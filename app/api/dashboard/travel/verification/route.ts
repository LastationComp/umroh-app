'use server';

import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { apiFetch } from '@/lib/Fetcher';
import { responseData, responseError } from '@/lib/Handling/response';
import { getServerSession } from 'next-auth';

export async function GET() {
  const session = await getServerSession(AuthOptions);

  const res = await apiFetch('/api/dashboard/travel/verification', session?.user.tokenApi ?? '');
  const result = await res.json();

  if (!res.ok || res.status !== 200) return responseError(result.message);

  return responseData(result.data);
}
