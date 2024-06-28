import LoadingUI from "@/components/Suspense/Loading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
// import MonitoringPackets from "./MonitoringPackets";
import dynamic from "next/dynamic";

const MonitoringPackets = dynamic(() => import("./MonitoringPackets"), {
  loading: () => <LoadingUI />,
});
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Monitoring Paket</CardTitle>
      </CardHeader>
      <CardContent>
        {/* <LoadingUI /> */}
        <MonitoringPackets page={Number(searchParams?.page) ?? 1} />
      </CardContent>
    </Card>
  );
}
