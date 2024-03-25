import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Dialog, DialogClose, DialogContent } from '../ui/dialog';
import { Button } from '../ui/button';

interface PopupSliders {
  data: any[];
  open: boolean;
  onOpenChange: any;
}
export default function PopupSliders({ data }: { data: any[] }) {
  return (
    <Dialog>
      <DialogContent className="max-w-xl">
        <DialogClose className="fixed top-8 right-8 z-30">
          <Button className="rounded-full uppercase opacity-50">x</Button>
        </DialogClose>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots max-w-xl -z-1"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
              partialVisibilityGutter: 100,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          deviceType={'desktop'}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {data.map((image: any, index: number) => (
            <Image src={image.url} key={index} alt="Image" className="max-md:w-[600px] object-cover" width={2000} height={1000} />
          ))}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
