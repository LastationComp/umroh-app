import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
export default function TopCarousel() {
  return (
    <section className="container mx-auto my-3 mt-[5rem]">
      <div className="flex justify-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="flex justify-center">
                <Image src={'https://cloud.umroh.com/images/upload/c_cover,f_auto,dpr_2.0,w_720,q_80,fl_progressive/banner/c27ddb8fda675548f7ff1324fedc0a7a.jpeg'} width={800} height={400} alt="Promo 1" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex justify-center">
                <Image src={'https://cloud.umroh.com/images/upload/c_cover,f_auto,dpr_2.0,w_720,q_80,fl_progressive/banner/6e5baa5c68429e08b0efeecd28253b9d.jpeg'} width={800} height={400} alt="Promo 1" />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
