import { SAlert } from "@/components/context/ShadAlert";
import { Metadata, ResolvingMetadata } from "next";
import React, { Suspense } from "react";
import { getPacketName } from "../action";
import LoadingUI from "@/components/Suspense/Loading";

// export const metadata: Metadata = {
//   title: 'Paket | Dashboard - Umroh.ai',
// };

type Props = {
  params: { packetId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.packetId;

  const packetTitle = await getPacketName(id);
  return {
    title: packetTitle ?? "Untitled Packet",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SAlert>
      <Suspense fallback={<LoadingUI />}>{children}</Suspense>
    </SAlert>
  );
}
