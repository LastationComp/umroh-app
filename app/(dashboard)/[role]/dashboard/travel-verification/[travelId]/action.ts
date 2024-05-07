import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { apiFetch } from '@/lib/Fetcher';
import { responseData, responseError } from '@/lib/Handling/response';
import { getServerSession } from 'next-auth';

export async function GetTravel(id: string) {
  const session = await getServerSession(AuthOptions);
  const res = await apiFetch('/api/dashboard/travel/' + id, session?.user.tokenApi ?? '');

  const result = await res.json();

  if (!res.ok || res.status !== 200) return responseError('Terjadi Kesalahan!');

  return result.data
}
