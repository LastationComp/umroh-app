'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Cover1 from '@/public/assets/Cover website Umrohkan_pages-to-jpg-0001.jpg';
import Cover2 from '@/public/assets/Cover website Umrohkan_pages-to-jpg-0002.jpg';

import Link from 'next/link';
import LazyLoadedContent from '@/components/images/LazyLoadedContent';
export default function TopCarousel() {
  const url = [
    {
      src: Cover1.src,
      blurUrl: Cover1.blurDataURL,
    },
    {
      src: Cover2.src,
      blurUrl: Cover2.blurDataURL,
    },
  ];
  return (
    <section className="md:container container-md mx-auto mb-3">
      <div className="flex justify-center mx-3">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {url.map((cover: any, index: number) => (
              <CarouselItem key={index}>
                <div className="flex justify-center">
                  <Link href={'/blog/category/title'}>
                    <Image
                      className="object-contain"
                      loading="lazy"
                      placeholder="blur"
                      style={{
                        objectFit: 'contain',
                        width: 'full',
                        height: 'full',
                      }}
                      blurDataURL={cover.blurUrl}
                      src={cover.src}
                      width={800}
                      height={400}
                      alt="Promo 1"
                    />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </section>
  );
}
