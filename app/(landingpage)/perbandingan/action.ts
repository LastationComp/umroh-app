'use server';

import { newApiFetch } from '@/lib/Fetcher';
import { getLaravelToken } from '@/lib/Handling/userSession';

export async function userComparison() {
  const token = await getLaravelToken();

  const res = await newApiFetch({
    url: '/api/profile/comparison?details=1',
    token: token,
  });

  return res.json();
}
