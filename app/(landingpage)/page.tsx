import TopCarousel from './TopCarousel';
import FeaturesContent from './FeaturesContent';
import StoryContent from './StoryContent';
import CoverContent from './CoverContent';
import FAQContent from './FAQContent';
import { Suspense } from 'react';
import LoadingUI from '@/components/Suspense/Loading';
import Search from './Search';
import Partner from './Partner';
import Gallery from './Gallery';
import { Button } from '@/components/ui/button';

// export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <section className=" max-md:container-md max-md:mx-3 md:mx-auto">
      <div className="md:container grid gap-3">
        <TopCarousel />
        <Search />
      </div>

      <div className="flex justify-center">
        <h1 className="font-bold text-xl">Galeri Jamaah</h1>
      </div>

      <div className="bg-blue-dark py-3 ">
        <Gallery />
      </div>

      <div className="md:container grid gap-3">
        <Suspense fallback={<LoadingUI />}>
          <FeaturesContent />
        </Suspense>
      </div>

      <div className="flex justify-center">
        <h1 className="text-[24px] font-bold">Rekan Travel Umroh Kami</h1>
      </div>
      <div className="bg-blue-dark py-3 ">
        <Suspense fallback={<LoadingUI />}>
          <Partner />
        </Suspense>
      </div>

      <section className="flex justify-center my-3">
        <Button variant={'ghost'} className="hover:bg-blue-dark/200">
          <span className="text-blue-dark  font-semibold">Lihat Lebih Banyak {'>'}</span>
        </Button>
      </section>

      <div className="md:container grid gap-3">
        <StoryContent />
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col text-center">
          <span className="text-[24px]">Diliput Oleh</span>
        </div>
      </div>

      <div className="bg-blue-dark py-3 ">
        <Suspense fallback={<LoadingUI />}>
          <CoverContent />
        </Suspense>
      </div>

      <div className="md:container grid gap-3">
        <FAQContent />
      </div>
    </section>
  );
}
