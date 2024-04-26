import TopCarousel from './TopCarousel';
import FeaturesContent from './FeaturesContent';
import StoryContent from './StoryContent';
import CoverContent from './CoverContent';
import FAQContent from './FAQContent';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingUI from '@/components/Suspense/Loading';
import Search from './Search';
import Partner from './Partner';
import Gallery from './Gallery';

const importDynamic = (url: string) => {
  return dynamic(() => import('@/app/(landingpage)/' + url), { ssr: false });
};


export default async function Home() {
  return (
    <>
      <TopCarousel />
      <Suspense fallback={<LoadingUI />}>
        <Search />
      </Suspense>
      <Gallery />
      <FeaturesContent />
      <Suspense fallback={<LoadingUI />}>
        <Partner />
      </Suspense>
      <StoryContent />
      <CoverContent />
      <FAQContent />
    </>
  );
}
