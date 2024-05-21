import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import React, { Suspense } from 'react';
import PacketForm from './PacketForm';
import { getPacket } from '../../action';
import FacilitiesForm from './FacilitiesForm';
import Departing from './Departing';
import LoadingUI from '@/components/Suspense/Loading';
import Galleries from './Galleries';
import Hotels from './Hotels';
import Categories from './Categories';
import Airlines from './Airlines';
export default async function AddPacketPage({ params }: { params: { packetId: string } }) {
  const packet = await getPacket(params.packetId);
  // const categories = await getCategories();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Draft Paket</CardTitle>
      </CardHeader>

      <PacketForm
        packetAirlines={<Airlines packetAirlines={packet?.airlines} />}
        packetCategories={<Categories defaultValue={packet?.category?.id ?? ''} />}
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
