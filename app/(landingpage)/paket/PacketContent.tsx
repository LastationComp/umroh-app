'use client';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPaketUmroh } from './action';
import PacketCard from '@/components/packet/PacketCard';
import { Button } from '@/components/ui/button';
import LoadingSkeleton from '@/components/Suspense/LoadingSkeleton';
import { delay } from '@/lib/Promise/Delay';
import LoadingSingleSkeleton from '@/components/Suspense/LoadingSingleSkeleton';
export default function PacketContent({ data }: { data: any[] }) {
  const [packetData, setPacketData] = useState(data);
  const [limit, setLimit] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const totalPage = 6;
  const fetchData = async () => {
    setIsLoading(true);
    await delay(1000);
    setLimit((limit) => limit + 1);
    const res = await getPaketUmroh(limit + 1);
    setPacketData([...data, ...res]);
    setIsLoading(false);
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {packetData.map((paket_umroh: any, index: number) => (
          <PacketCard data={paket_umroh} index={index} key={index} />
        ))}
        {isLoading && totalPage !== packetData.length && <LoadingSingleSkeleton card={packetData.length % 3 !== 0 ? (packetData.length % 3) + 6 : 6} />}
      </div>
      <div className="flex justify-center my-3">{!isLoading && totalPage !== packetData.length && <Button onClick={fetchData}>Tampilkan Lainnya</Button>}</div>
    </section>
  );
}
