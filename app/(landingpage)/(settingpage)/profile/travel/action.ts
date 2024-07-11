'use server';

import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { newApiFetch } from '@/lib/Fetcher';
import { getLaravelToken, getUserSession } from '@/lib/Handling/userSession';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';

export async function getTravelProfile() {
  const session = await getServerSession(AuthOptions);
  const travelId = session?.user.travel.id;
  const res = await newApiFetch({
    url: '/api/profile/travel/' + travelId,
    token: session?.user.tokenApi ?? '',
    options: {
      tag: ['travel-profile'],
    },
  });

  const result = await res.json();

  return result.data;
}

export async function getCountries() {
  const token = await getLaravelToken();
  const res = await newApiFetch({
    url: '/api/data/countries',
    token: token,
  });

  const result = await res.json();
  return result.data;
}

export async function getProvinces() {
  const token = await getLaravelToken();

  const res = await newApiFetch({
    url: '/api/data/provinces',
    token: token,
  });

  const result = await res.json();
  return result.data;
}

export async function getCities() {
  const token = await getLaravelToken();
  const res = await newApiFetch({
    url: '/api/data/cities',
    token: token,
  });

  const result = await res.json();
  return result.data;
}

export async function saveTravelProfile(formData: FormData) {
  const user = await getUserSession();
  const res = await newApiFetch({
    url: '/api/profile/travel/' + user?.travel.id,
    token: user?.tokenApi ?? '',
    method: 'POST',
    body: formData,
  });

  revalidateTag('travel-profile');
  // console.log(await res.json());
  return res.json();
}
