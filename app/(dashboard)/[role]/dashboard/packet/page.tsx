import { Button } from "@/components/ui/button";
import React from "react";
import PacketAdd from "./packetAdd";

export default function Page() {
  return (
    <section className="flex items-center justify-between">
      <span>Paket Travel</span>
      <PacketAdd />
    </section>
  );
}
