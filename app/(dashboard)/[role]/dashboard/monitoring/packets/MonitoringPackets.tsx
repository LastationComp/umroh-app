import React from "react";
import { getMonitoringPackets } from "./action";
import MonitoringPacketCard from "./MonitoringPacketCard";

export default async function MonitoringPackets({
  page = 1,
}: {
  page?: number;
}) {
  const packets = await getMonitoringPackets({
    page: page,
  });
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {packets &&
        packets.data.map((packet: any, index: number) => (
          <div key={index}>
            <MonitoringPacketCard data={packet} />
          </div>
        ))}
    </section>
  );
}
