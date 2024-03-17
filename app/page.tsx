'use client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import TopCarousel from './TopCarousel';
import MainContent from './MainContent';
import Gallery from './Gallery';
import FeaturesContent from './FeaturesContent';
import PartnerContent from './PartnerContent';
import StoryContent from './StoryContent';
const Content = dynamic(() => import('@/app/Content'), { ssr: false });
export default function Home() {
  return (
    <section className="h-screen">
      <Navbar />
      <TopCarousel />
      <MainContent />
      <Gallery />
      <FeaturesContent />
      <PartnerContent />
      <StoryContent />
    </section>
  );
}
