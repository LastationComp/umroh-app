import React from 'react';
import PacketDetailPage from './PacketDetailPage';
import TravelProfile from './TravelProfile';
import Facilities from './Facilities';
import Hotels from './Hotels';
import Plane from './Plane';
import TimeLine from './TimeLinePage';
import TermsAndConditions from './TermsAndConditions';
import TravelReviews from './TravelReviews';
import OtherPacketLists from './OtherPacketLists';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <section className="my-[5rem] md:container md:mx-auto mx-3">
      <PacketDetailPage slug={params.slug} />
      <TravelProfile />
      <Facilities />
      <Hotels />
      <Plane />
      <TimeLine />
      <TermsAndConditions />
      <TravelReviews />
      <OtherPacketLists />
    </section>
  );
}
