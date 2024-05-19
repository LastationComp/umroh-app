import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { newApiFetch } from '@/lib/Fetcher';
import { responseData } from '@/lib/Handling/response';
import { getServerSession } from 'next-auth';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const session = await getServerSession(AuthOptions);
  const searchParams = req.nextUrl.searchParams;
  const res = await newApiFetch({
    url: '/api/travel/travel-packets' + (!searchParams.toString() ? '' : '?' + searchParams.toString()),
    method: 'GET',
    token: session?.user.tokenApi ?? '',
    options: {
      tag: ['travel-packet-drafts'],
    },
  });

  const result = await res.json();
  return responseData(result?.data);
}
