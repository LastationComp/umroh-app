'use client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import TopCarousel from './TopCarousel';
import MainContent from './MainContent';
const Content = dynamic(() => import('@/app/Content'), { ssr: false });
export default function Home() {
  return (
    <section className="h-screen">
      <Navbar />
      <TopCarousel />
      <MainContent />
    </section>
  );
}
