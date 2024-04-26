import Image from 'next/image';
import React, { Suspense, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Dialog, DialogClose, DialogContent } from '../ui/dialog';
import { Button } from '../ui/button';
import ImageGallery from 'react-image-gallery';
interface PopupSliders {
  data: any[];
  open: boolean;
  onOpenChange: any;
  currentSlide?: number;
}
export default function PopupSliders({ data, open, onOpenChange, currentSlide = 0 }: PopupSliders) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="scale-95 -px-5 md:w-auto">
        <DialogClose className="fixed top-8 right-8 z-30">
          <Button className="rounded-full uppercase opacity-50">x</Button>
        </DialogClose>
        <div className="flex justify-center ">
          <ImageGallery lazyLoad showFullscreenButton={false} startIndex={currentSlide} showPlayButton={false} additionalClass="max-w-sm md:max-w-md w-full lg:max-w-lg object-cover" items={data} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
