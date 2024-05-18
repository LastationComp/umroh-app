'use server';
import React from 'react';
import { getHotels } from '../../action';
import HotelsForm from './HotelsForm';

export default async function Hotels({ packetId }: { packetId: string }) {
  const hotels = await getHotels(packetId);

  return <HotelsForm hotels={hotels} packetId={packetId} />;
}
