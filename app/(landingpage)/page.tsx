import TopCarousel from './TopCarousel';
import FeaturesContent from './FeaturesContent';
// import PartnerContent from './PartnerContent';
import StoryContent from './StoryContent';
import CoverContent from './CoverContent';
import FAQContent from './FAQContent';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const importDynamic = (url: string) => {
  return dynamic(() => import('@/app/(landingpage)/' + url), { ssr: true });
};

const Gallery = importDynamic('Gallery');
const MainContent = importDynamic('MainContent');
const PartnerContent = importDynamic('PartnerContent');
export default function Home() {
  return (
    <>
      <TopCarousel />
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <MainContent />
        <Gallery />
      </Suspense>
      <FeaturesContent />
      <Suspense fallback={<div>Loading...</div>}>
        <PartnerContent />
      </Suspense>
      <StoryContent />
      <CoverContent />
      <FAQContent />
    </>
  );
}
