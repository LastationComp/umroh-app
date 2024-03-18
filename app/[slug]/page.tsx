import React from 'react';
import PacketDetailPage from './PacketDetailPage';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <section className="my-[5rem] container mx-auto">
      <PacketDetailPage slug={params.slug} />
    </section>
  );
}
