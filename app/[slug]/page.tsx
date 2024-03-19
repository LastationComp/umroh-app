import React from 'react';
import PacketDetailPage from './PacketDetailPage';
import TravelProfile from './TravelProfile';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <section className="my-[5rem] container mx-auto">
      <PacketDetailPage slug={params.slug} />
      <TravelProfile />
    </section>
  );
}
