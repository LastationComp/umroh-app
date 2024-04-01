import React, { Suspense } from 'react';
import PacketDetailPage from './PacketDetailPage';
import TravelProfile from './TravelProfile';
import Facilities from './Facilities';
import Hotels from './Hotels';
import Plane from './Plane';
import TimeLine from './TimeLinePage';
import TermsAndConditions from './TermsAndConditions';
import TravelReviews from './TravelReviews';
import OtherPacketLists from './OtherPacketLists';
import LoadingUI from '@/components/Suspense/Loading';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <section className=" md:container md:mx-auto">
      <PacketDetailPage slug={params.slug} />
      <TravelProfile />
      <Facilities />
      <Hotels />
      <Plane />
      <TimeLine />
      <TermsAndConditions />
      <TravelReviews />
      <Suspense fallback={<LoadingUI />}>
        <OtherPacketLists />
      </Suspense>
    </section>
  );
}
