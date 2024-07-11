'use server';
import { apiFetch } from '@/lib/Fetcher';
import { getServerSession } from 'next-auth';
import { NextRequest } from 'next/server';
import { AuthOptions } from '../../auth/AuthOptions';
import { getLaravelToken } from '@/lib/Handling/userSession';
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const token = await getLaravelToken();
  const res = await apiFetch('/api/dashboard/facilities?' + searchParams.toString(), token);
  const result = await res.json();
  return Response.json(result?.data);
}
