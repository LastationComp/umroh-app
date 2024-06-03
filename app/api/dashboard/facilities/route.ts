'use server';
import { apiFetch } from '@/lib/Fetcher';
import { getServerSession } from 'next-auth';
import { NextRequest } from 'next/server';
import { AuthOptions } from '../../auth/AuthOptions';
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.get('page') ?? 1;
  const paginate = searchParams.get('paginate') ?? 10;

  const session = await getServerSession(AuthOptions);
  const res = await apiFetch('/api/dashboard/facilities?page=' + page + '&paginate=' + paginate, session?.user?.tokenApi ?? '');
  const result = await res.json();
  return Response.json(result?.data);
}
