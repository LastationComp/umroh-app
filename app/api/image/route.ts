import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const url = searchParams.get('url') ?? '';
  const res = await fetch(url, {
    cache: 'no-store',
    method: 'GET',
  });

  return res;
}
