import React from "react";
import { getMonitoringReportPacket } from "../action";
// import MonitoringGraph from "./MonitoringGraph";
import LineGraph from "./LineGraph";

export default async function Monitoring({ packetId }: { packetId: string }) {
  const data = await getMonitoringReportPacket(packetId);
  return <LineGraph labels={data.labels} datasets={data.datasets} />;
}
