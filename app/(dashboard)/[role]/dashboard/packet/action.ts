'use server';

import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { apiFetch, newApiFetch } from '@/lib/Fetcher';
import { getServerSession } from 'next-auth';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export async function getPacket(id: string) {
  const session = await getServerSession(AuthOptions);

  const res = await newApiFetch({
    url: '/api/travel/travel-packets/' + id,
    token: session?.user.tokenApi ?? '',
    options: {
      // cache: true,
      tag: ['travel-packet'],
    },
  });

  const result = await res.json();
  return result.data;
  
}

export async function getPacketNameById(id: string) {
  const session = await getServerSession(AuthOptions);
  const res = await newApiFetch({
    url: '/api/metadata/packet/' + id,
    token: session?.user.tokenApi ?? '',
  });

  const result = await res.json();

  return result;
}

export async function getCities() {
  const session = await getServerSession(AuthOptions);
  const res = await newApiFetch({
    url: '/api/data/cities',
    token: session?.user.tokenApi ?? '',
    options: {
      tag: ['travel-cities'],
    },
  });

  const result = await res.json();

  return result.data;
}

export async function getHotels(id: string) {
  const session = await getServerSession(AuthOptions);

  const res = await newApiFetch({
    url: '/api/travel/travel-packets/' + id + '/hotels',
    token: session?.user.tokenApi ?? '',
    options: {
      cache: true,
      tag: ['travel-packet-hotels'],
    },
  });

  const result = await res.json();

  return result.data;
}

export async function getCategories() {
  const session = await getServerSession(AuthOptions);
  const res = await newApiFetch({
    url: '/api/travel/categories?pagination=0',
    token: session?.user.tokenApi ?? '',
  });

  const result = await res.json();

  return result.data;
}

export async function getAirlines() {
  const session = await getServerSession(AuthOptions);
  const res = await newApiFetch({
    url: '/api/data/airlines',
    token: session?.user.tokenApi ?? '',
  });

  const result = await res.json();

  return result.data;
}

export async function createPacket() {
  const session = await getServerSession(AuthOptions);
  const formData = new FormData();
  formData.set('travel_id', session?.user.travel.id ?? '');

  const res = await newApiFetch({
    url: '/api/travel/travel-packets',
    token: session?.user.tokenApi ?? '',
    method: 'POST',
    body: formData,
  });

  const result = await res.json();

  if (!res.ok && res.status !== 200) return false;

  return redirect('packet/' + result.data + '/draft');
}

export async function draftPacket(id: string, formData: FormData) {
  const session = await getServerSession(AuthOptions);

  const res = await apiFetch('/api/travel/travel-packets/' + id + '/draft', session?.user.tokenApi ?? '', 'POST', formData);

  const result = await res.json();

  if (res.ok && res.status === 200) {
    revalidateTag('travel-packet');
    revalidatePath('/(dashboard)/[role]/dashboard/packet/[packetId]/draft', 'page');
  }

  return result;
}

export async function createPacketHotel(id: string, formData: FormData) {
  const session = await getServerSession(AuthOptions);

  const res = await newApiFetch({
    url: `/api/travel/travel-packets/${id}/hotels`,
    token: session?.user.tokenApi ?? '',
    method: 'POST',
    body: formData,
  });

  const result = await res.json();

  revalidateTag('travel-packet-hotels');
  revalidateTag('travel-packet');
  return result;
}

export async function getPacketGalleries(id: string) {
  const session = await getServerSession(AuthOptions);

  const res = await newApiFetch({
    url: `/api/travel/travel-packets/${id}/galleries`,
    token: session?.user.tokenApi ?? '',
    options: {
      cache: true,
      tag: ['travel-packet-galleries'],
    },
  });

  const result = await res.json();
  return result.data;
}

export async function uploadGallery(id: string, formData: FormData) {
  const session = await getServerSession(AuthOptions);

  const res = await apiFetch(`/api/travel/travel-packets/${id}/galleries`, session?.user.tokenApi ?? '', 'POST', formData);

  revalidateTag('travel-packet-galleries');
  revalidateTag('travel-packet');

  return await res.json();
}

export async function cancelDraft(id: string) {
  const session = await getServerSession(AuthOptions);

  const res = await newApiFetch({
    url: '/api/travel/travel-packets/' + id,
    token: session?.user.tokenApi ?? '',
    method: 'DELETE',
  });

  if (!res.ok || res.status !== 200) return false;

  revalidateTag('travel-packet-drafts');
  // revalidatePath('/(dashboard)/[role]/dashboard/packet', 'page');
  return true;
}
