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
      <DialogContent className="w-auto scale-90">
        <DialogClose className="fixed top-8 right-8 z-30">
          <Button className="rounded-full uppercase opacity-50">x</Button>
        </DialogClose>
        <ImageGallery lazyLoad showFullscreenButton={false} startIndex={currentSlide} showPlayButton={false} additionalClass="max-w-sm lg:max-w-2xl" items={data} />
      </DialogContent>
    </Dialog>
  );
}
