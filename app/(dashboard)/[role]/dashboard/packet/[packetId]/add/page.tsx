import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import PacketForm from "./PacketForm";
import { getPacket, getPacketGalleries } from "../../action";
import PacketGalleries from "./PacketGalleries";
import FacilitiesForm from "./FacilitiesForm";
import { ScrollArea } from "@/components/ui/scroll-area";
export default async function AddPacketPage({
  params,
}: {
  params: { packetId: string };
}) {
  const packet = await getPacket(params.packetId);
  const galleries = await getPacketGalleries(params.packetId);
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
        packetFacilities={<FacilitiesForm facilities={packet.facilities} />}
      />
    </Card>
  );
}
