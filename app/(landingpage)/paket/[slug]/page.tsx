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
import { getPacketBySlug } from '../action';
import { getUserRole } from '@/app/_actions/Authentication';

export default async function Page({ params }: { params: { slug: string } }) {
  const packet = await getPacketBySlug(params.slug);
  const userRole = await getUserRole();
  return (
    <section className=" md:container md:mx-auto">
      <PacketDetailPage data={packet.data} userRole={userRole} />
      <TravelProfile travel={packet.data.travel} />
      <Facilities fac={packet.data.facilities} />
      <Hotels data={packet.data.hotels} />
      <Plane data={packet.data.airlines} />
      <TimeLine data={packet.data.plans} />
      <TermsAndConditions data={packet.data.terms_conditions} />
      <TravelReviews />
      <Suspense fallback={<LoadingUI />}>
        <OtherPacketLists />
      </Suspense>
    </section>
  );
}
