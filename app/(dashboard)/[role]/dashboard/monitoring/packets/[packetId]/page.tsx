import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import UserCard from "./UserCard";
import { getMonitoringPacketById, getMonitoringReportPacket } from "../action";
import { Button } from "@/components/ui/button";
import Monitoring from "./Monitoring";

export default async function Page({
  params,
}: {
  params: { packetId: string };
}) {
  const packet = await getMonitoringPacketById(params.packetId);
  await getMonitoringReportPacket(params.packetId);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{packet.name}</CardTitle>
        <CardDescription>Monitoring Paket (Realtime)</CardDescription>
      </CardHeader>
      <CardContent>
        <Monitoring packetId={params.packetId} />
        <h1 className="text-blue-dark text-center font-semibold uppercase">
          Calon Jamaah yang sedang membandingkan
        </h1>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {packet?.comparison &&
            packet?.comparison.map((compare: any, index: number) => (
              <section key={index}>
                <UserCard user={compare} index={index} />
              </section>
            ))}
        </section>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"}>Kembali</Button>
      </CardFooter>
    </Card>
  );
}
