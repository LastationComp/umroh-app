'use server';
import { newApiFetch } from '@/lib/Fetcher';
import { getServerSession } from 'next-auth';
import { NextRequest } from 'next/server';
import { AuthOptions } from '../../auth/AuthOptions';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const session = await getServerSession(AuthOptions);
  const url = searchParams.get('url') ?? '';

  const result = await newApiFetch({
    url: url,
    method: 'GET',
    token: session?.user.tokenApi ?? '',
  });

  //   const blob = await result.blob();
  return result;
}
