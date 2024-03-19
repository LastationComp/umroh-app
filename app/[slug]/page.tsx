import React from 'react';
import PacketDetailPage from './PacketDetailPage';
import TravelProfile from './TravelProfile';
import Facilities from './Facilities';
import Hotels from './Hotels';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <section className="my-[5rem] md:container md:mx-auto mx-3">
      <PacketDetailPage slug={params.slug} />
      <TravelProfile />
      <Facilities />
      <Hotels />
    </section>
  );
}
