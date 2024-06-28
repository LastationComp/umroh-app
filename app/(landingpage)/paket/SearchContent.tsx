import React from "react";
import { getPackets, getPaketUmroh } from "./action";
import PacketContent from "./PacketContent";
import { useSearchPacket } from "@/lib/Zustands/LandingPage/SearchPacket";

export default async function SearchContent({ query }: { query: string }) {
  const data = await getPackets({
    page: 1,
    q: query,
  });

  return (
    <section>
      <PacketContent data={data} />
    </section>
  );
}
