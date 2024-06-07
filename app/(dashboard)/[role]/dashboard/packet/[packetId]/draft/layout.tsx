import { SAlert } from '@/components/context/ShadAlert';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';
import { getPacketNameById } from '../../action';

// export const metadata: Metadata = {
//   title: 'Paket | Dashboard - Umroh.ai',
// };

type Props = {
  params: { packetId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  
  const id = params.packetId;

  const packet = await getPacketNameById(id);
  return {
    title: packet?.data?.title ?? 'Untitled Packet',
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SAlert>{children}</SAlert>;
}
