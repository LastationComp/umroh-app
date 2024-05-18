'use server';

import React from 'react';
import { getPacketGalleries } from '../../action';
import GalleriesForm from './GalleriesForm';

export default async function Galleries({ packetId }: { packetId: string }) {
  const galleries = await getPacketGalleries(packetId);

  return <GalleriesForm packetId={packetId} images={galleries} />;
}
