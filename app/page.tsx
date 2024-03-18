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
import CoverContent from './CoverContent';
import Footer from './Footer';
import FAQContent from './FAQContent';
import ContactContent from './ContactContent';
const Content = dynamic(() => import('@/app/Content'), { ssr: false });
export default function Home() {
  return (
    <section className="h-full bg-tacao">
      <Navbar />
      <TopCarousel />
      <MainContent />
      <Gallery />
      <FeaturesContent />
      <PartnerContent />
      <StoryContent />
      <CoverContent />
      <FAQContent />
      <ContactContent />
      <Footer />
    </section>
  );
}
