import TopCarousel from './TopCarousel';
import FeaturesContent from './FeaturesContent';
import StoryContent from './StoryContent';
import CoverContent from './CoverContent';
import FAQContent from './FAQContent';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import MainContent from './MainContent';

const importDynamic = (url: string) => {
  return dynamic(() => import('@/app/(landingpage)/' + url), { ssr: false });
};

const Gallery = importDynamic('Gallery');
// const MainContent = importDynamic('MainContent');
const PartnerContent = importDynamic('PartnerContent');

async function getPaketUmroh() {
  const res = await fetch('https://umroh-ai-dummy-api-production.up.railway.app/paket_umroh', { cache: 'no-store' });
  return res.json();
}
export default async function Home() {
  const umrohData = await getPaketUmroh();
  return (
    <>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <TopCarousel />
        <MainContent data={umrohData}/>
        <Gallery />
        <FeaturesContent />
        <PartnerContent />
        <StoryContent />
        <CoverContent />
        <FAQContent />
      </Suspense>
    </>
  );
}
