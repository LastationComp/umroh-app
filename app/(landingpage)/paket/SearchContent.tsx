import React from "react";
import { getPackets, getPaketUmroh } from "./action";
import PacketContent from "./PacketContent";
import { useSearchPacket } from "@/lib/Zustands/LandingPage/SearchPacket";
import { getUserRole } from "@/app/_actions/Authentication";

export default async function SearchContent({ query }: { query: string }) {
  const data = await getPackets({
    page: 1,
    q: query,
  });
  const userRole = await getUserRole()

  return (
    <section>
      <PacketContent data={data} userRole={userRole} />
    </section>
  );
}
