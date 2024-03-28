import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogHeader } from '../ui/dialog';
import Image from 'next/image';
import { Button } from '../ui/button';

interface SingleImage {
  open: boolean;
  url: string;
  title: string;
  onOpenChange?: any;
}
export default function PopupSingleImage({ open, url, onOpenChange, title = 'Popup Image' }: SingleImage) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm md:max-w-md lg:max-w-xl">
        <DialogClose className="fixed top-8 right-8 z-30">
          <Button className="rounded-full uppercase opacity-50">x</Button>
        </DialogClose>
        <Image className="rounded-xl" src={url} alt={title} width={1000} height={1000} />
      </DialogContent>
    </Dialog>
  );
}
