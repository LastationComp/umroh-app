"use client";
import React from "react";
import { createPacket } from "./action";
import nProgress from "nprogress";
import { Button } from "@/components/ui/button";

export default function PacketAdd() {
  const addPacket = async () => {
    nProgress.start();
    const result = await createPacket();
    if (!result) nProgress.done();
  };
  return <Button onClick={addPacket}>Tambah Paket</Button>;
}
