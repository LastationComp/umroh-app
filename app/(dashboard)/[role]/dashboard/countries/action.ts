import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { apiFetch } from '@/lib/Fetcher';
import { getServerSession } from 'next-auth';

export async function GET() {
  const session = await getServerSession(AuthOptions);

  const res = await apiFetch('/api/admin/countries', session?.user.tokenApi ?? '');

  return res.json();
}
