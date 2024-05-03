'use server';

import { getServerSession } from 'next-auth';
import { NextRequest } from 'next/server';
import { AuthOptions } from '../../auth/AuthOptions';
import { apiFetch } from '@/lib/Fetcher';
import { responseData, responseError, responseSuccess } from '@/lib/Handling/response';

export async function GET(req: NextRequest) {
  const session = await getServerSession(AuthOptions);
  const searchParams = req.nextUrl.searchParams;
  const countryId = searchParams.get('country') ?? '';
  const provinceId = searchParams.get('province') ?? '';

  const res = await apiFetch(`/api/data/cities?country=${countryId}&province=${provinceId}`, session?.user.tokenApi ?? '');
  const result = await res.json();
  if (!res.ok) return responseError(result?.message);

  return responseData(result.data);
}
