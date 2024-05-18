import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import PacketForm from "./PacketForm";
import {
  getCities,
  getHotels,
  getPacket,
  getPacketGalleries,
} from "../../action";
import PacketGalleries from "./PacketGalleries";
import FacilitiesForm from "./FacilitiesForm";
import DepartingForm from "./DepartingForm";
import HotelsForm from "./HotelsForm";
export default async function AddPacketPage({
  params,
}: {
  params: { packetId: string };
}) {
  const packet = await getPacket(params.packetId);
  const galleries = await getPacketGalleries(params.packetId);
  const cities = await getCities();
  const hotels = await getHotels(params.packetId);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tambah Paket</CardTitle>
      </CardHeader>

      <PacketForm
        packet={packet}
        packetId={params.packetId}
        packetGalleries={
          <PacketGalleries images={galleries} packetId={params.packetId} />
        }
        packetHotels={<HotelsForm hotels={hotels} packetId={params.packetId} />}
        packetFacilities={<FacilitiesForm facilities={packet.facilities} />}
        packetDeparting={
          <DepartingForm cities={cities} departings={packet.departings} />
        }
      />
    </Card>
  );
}
