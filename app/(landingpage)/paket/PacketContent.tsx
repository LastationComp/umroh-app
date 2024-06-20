"use client";
import React, { useEffect, useMemo, useState, useTransition } from "react";
import { getPackets, getPaketUmroh } from "./action";
import { Button } from "@/components/ui/button";
import { delay } from "@/lib/Promise/Delay";
import LoadingSingleSkeleton from "@/components/Suspense/LoadingSingleSkeleton";
import TravelPacketCard from "@/components/packet/TravelPacketCard";
import { useSearchPacket } from "@/lib/Zustands/LandingPage/SearchPacket";
export default function PacketContent({ data }: { data: any }) {
  const [packetData, setPacketData]: any = useState(data?.data);
  const { page, incPage, resetPage } = useSearchPacket((state) => state);
  const [isPending, startTransition] = useTransition();
  const [hasMoreData, setHasMoreData] = useState(!!data?.next_page_url);
  const fetchData = () => {
    startTransition(async () => {
      const result = await getPackets({
        page: page,
      });
      setPacketData([...packetData, ...result.data]);
      setHasMoreData(!!result?.next_page_url);
    });
  };

  useEffect(() => {
    resetPage();
  }, []);

  useEffect(() => {
    if (page === 1) return;
    fetchData();
  }, [page]);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {packetData &&
          packetData.map((paket_umroh: any, index: number) => (
            <TravelPacketCard data={paket_umroh} index={index} key={index} />
          ))}
        {isPending && (
          <LoadingSingleSkeleton
            card={packetData.length % 3 !== 0 ? (packetData.length % 3) + 6 : 6}
          />
        )}
      </div>
      <div className="flex justify-center my-3">
        {hasMoreData && (
          <Button onClick={() => incPage()}>Tampilkan Lainnya</Button>
        )}
      </div>
      {packetData.length === 0 && <span className="flex justify-center">Tidak ada paket.</span>}
    </section>
  );
}
