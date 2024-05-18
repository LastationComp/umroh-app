import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import React, { Suspense } from 'react';
import PacketForm from './PacketForm';
import { getCategories, getPacket } from '../../action';
import FacilitiesForm from './FacilitiesForm';
import Departing from './Departing';
import LoadingUI from '@/components/Suspense/Loading';
import Galleries from './Galleries';
import Hotels from './Hotels';
export default async function AddPacketPage({ params }: { params: { packetId: string } }) {
  const packet = await getPacket(params.packetId);
  const categories = await getCategories();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Draft Paket</CardTitle>
      </CardHeader>

      <PacketForm
        categories={categories}
        packet={packet}
        packetId={params.packetId}
        packetGalleries={<Galleries packetId={params.packetId} />}
        packetHotels={<Hotels packetId={params.packetId} />}
        packetFacilities={<FacilitiesForm facilities={packet.facilities} />}
        packetDeparting={<Departing departings={packet.departings} />}
      />
    </Card>
  );
}
